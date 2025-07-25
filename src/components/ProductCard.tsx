import type { Product } from "../pages/Home.tsx";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-md w-full max-w-xs flex flex-col overflow-hidden cursor-pointer hover:shadow-xs transition-shadow min-h-[270px]"
    >
      {/* Imagen */}
      <div className="w-full h-40 bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Contenido con estrellas + precio al fondo */}
      <div className="pt-3 flex flex-col flex-grow">
        <h3 className="text-sm font-semibold text-ellipsis line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-auto flex flex-col gap-2">
          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }, (_, i) =>
              i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />,
            )}
          </div>

          <div className="font-semibold">
            {product.price.toLocaleString("es-ES", {
              style: "currency",
              currency: "EUR",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
