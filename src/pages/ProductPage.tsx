import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import type { Product } from "./Home";
import { BookingSummary } from "../components/BookingSummary.tsx";

const MOCK_PRODUCT: Product = {
  id: 1,
  name: "Apple MacBook Pro 14” M3",
  image:
    "https://cdn.pixabay.com/photo/2016/11/21/15/47/macbook-1846056_1280.jpg",
  rating: 5,
  price: 2199,
  description:
    "High-performance laptop with Apple M3 chip, ideal for professionals and creatives.",
};

export const ProductPage = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCT; // aquí podrías fetch real

  // Rango de fechas seleccionado
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  // Fechas bloqueadas
  const [disabledIntervals, setDisabledIntervals] = useState<
    { start: Date; end: Date }[]
  >([]);

  useEffect(() => {
    // Simular respuesta del backend con fechas bloqueadas
    setDisabledIntervals([
      {
        start: new Date(new Date().setDate(new Date().getDate() + 2)),
        end: new Date(new Date().setDate(new Date().getDate() + 4)),
      },
      {
        start: new Date(new Date().setDate(new Date().getDate() + 7)),
        end: new Date(new Date().setDate(new Date().getDate() + 9)),
      },
    ]);
  }, []);

  const [startDate, endDate] = range;
  const days =
    startDate && endDate
      ? Math.ceil(
          (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;

  if (!product) return <div>Loading...</div>;

  return (
    <section className="max-w-6xl px-10 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
      {/* Imagen */}
      <div className="flex flex-col gap-4">
        <div className="w-full h-64 md:h-[400px] bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Info y selección */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="text-yellow-500 flex text-xl mt-1">
          {Array.from({ length: 5 }, (_, i) =>
            i < product.rating ? "★" : "☆",
          )}
        </div>
        <p className="my-4">{product.description}</p>

        <p className="text-xl font-semibold mb-2">
          {product.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
          })}{" "}
          / día
        </p>

        {/* Selector de rango de fechas */}
        <span className="mt-1">Selecciona las fechas para el alquiler:</span>
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setRange(update as [Date, Date])}
          minDate={new Date()}
          excludeDateIntervals={disabledIntervals}
          className="border rounded px-3 py-2 w-[210px] text-sm text-center mt-2"
          placeholderText="Selecciona fechas"
          inline={false}
        />

        {/* Resumen del total */}
        <BookingSummary
          days={days}
          pricePerDay={product.price}
        ></BookingSummary>

        {/* Botón de reserva */}
        <button
          disabled={days <= 0}
          className="mt-auto bg-accent py-2 px-2 rounded rounded-3xl w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {days <= 0
            ? "Selecciona las fechas de alquiler"
            : "Hacer petición de alquiler"}
        </button>
      </div>
    </section>
  );
};
