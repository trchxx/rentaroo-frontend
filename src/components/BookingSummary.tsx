interface BookingSummaryProps {
  days: number;
  pricePerDay: number;
  taxRate?: number; // e.g. 0.21 para 21% IVA
  commissionRate?: number; // e.g. 0.05 para 5% comisión
}

export const BookingSummary = ({
  days,
  pricePerDay,
  taxRate = 0.21,
  commissionRate = 0.03,
}: BookingSummaryProps) => {
  if (days <= 0) return null;

  const subtotal = days * pricePerDay;
  const taxAmount = subtotal * taxRate;
  const commissionAmount = subtotal * commissionRate;
  const total = subtotal + taxAmount + commissionAmount;

  const formatCurrency = (value: number) =>
    value.toLocaleString("es-ES", { style: "currency", currency: "EUR" });

  const LineItem = ({ label, amount }: { label: string; amount: number }) => (
    <div className="flex justify-between py-1">
      <span>{label}</span>
      <span className="font-semibold">{formatCurrency(amount)}</span>
    </div>
  );

  return (
    <section className=" border-t border-[bg-primary] pt-4 mt-8 text-sm ">
      <LineItem
        label={`${days} día${days > 1 ? "s" : ""} × ${formatCurrency(pricePerDay)}`}
        amount={subtotal}
      />
      <LineItem
        label={`IVA (${(taxRate * 100).toFixed(0)}%)`}
        amount={taxAmount}
      />
      <LineItem
        label={`Rentaroo (Fees ${(commissionRate * 100).toFixed(0)}%)`}
        amount={commissionAmount}
      />
      <div className="border-t border-[bg-primary] mt-2 pt-2 flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>
    </section>
  );
};
