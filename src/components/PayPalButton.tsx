import React, { useEffect, useRef } from "react";

interface PayPalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    if (window.paypal && paypalRef.current) {
      // Limpiar el div antes de renderizar para evitar duplicados
      paypalRef.current.innerHTML = "";
      // @ts-ignore
      window.paypal.Buttons({
        style: {
          color: "gold",
          shape: "pill",
          label: "pay",
          layout: "vertical",
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: "EUR",
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const details = await actions.order.capture();
          onSuccess(details);
        },
        onError: (err: any) => {
          alert("Error en el pago con PayPal: " + err);
        },
      }).render(paypalRef.current);
    }
  }, [amount, onSuccess]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;