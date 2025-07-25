import type { FilterConfig } from "../pages/Home.tsx";
interface Props {
  filters: FilterConfig[];
  onChange: (values: Record<string, any>) => void;
}

export const Filters = ({ filters, onChange }: Props) => {
  return (
    <section className="flex gap-4 items-center justify-center w-full">
      {filters.map((filter) => (
        <button className="bg-secondary px-3 py-1 rounded text-sm">
          {filter.label}
        </button>
      ))}
    </section>
  );
};
