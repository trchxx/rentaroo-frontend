import { Filters } from "../components/Filters.tsx";
import { ProductCard } from "../components/ProductCard.tsx";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number; // de 0 a 5
}

export interface FilterConfig {
  name: string;
  label: string;
  type: "select" | "range" | "checkbox";
  options?: string[];
  min?: number;
  max?: number;
  multiple?: boolean;
}

const filtersFromAPI: FilterConfig[] = [
  {
    name: "category",
    label: "Category",
    type: "select", // ✅ no "Select" ni variable
    options: ["SUV", "Sedan", "Convertible"],
  },
  {
    name: "doors",
    label: "Doors",
    type: "checkbox", // ✅ exact match
    options: ["2", "4", "5"],
  },
  {
    name: "price",
    label: "Price",
    type: "range", // ✅ exact match
    min: 5000,
    max: 100000,
  },
];

const products = [
  {
    id: 1,
    name: "Apple MacBook Pro 14” M3Apple MacBook Pro 14” M3Apple MacBook Pro 14” M3",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/15/47/macbook-1846056_1280.jpg",
    rating: 5,
    price: 2199,
    description:
      "High-performance laptop with Apple M3 chip, ideal for professionals and creatives.",
  },
  {
    id: 2,
    name: "Logitech MX Master 3S",
    image:
      "https://cdn.pixabay.com/photo/2020/02/11/10/27/mouse-4837613_1280.jpg",
    rating: 5,
    price: 119,
    description:
      "Ergonomic wireless mouse with advanced tracking and customizable buttons.",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/05/17/headphones-1868612_1280.jpg",
    rating: 5,
    price: 399,
    description:
      "Industry-leading noise cancelling headphones with premium sound and comfort.",
  },
  {
    id: 4,
    name: "Canon EOS R6",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/analog-camera-1867170_1280.jpg",
    rating: 4,
    price: 2499,
    description:
      "Mirrorless full-frame camera with excellent autofocus and video capabilities.",
  },
  {
    id: 5,
    name: "Samsung Galaxy Tab S9",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/technology-1869235_1280.jpg",
    rating: 4,
    price: 899,
    description:
      "High-end Android tablet with AMOLED display and S Pen support.",
  },
  {
    id: 6,
    name: "DJI Mini 3 Pro",
    image:
      "https://cdn.pixabay.com/photo/2020/03/17/19/19/drone-4940227_1280.jpg",
    rating: 5,
    price: 799,
    description:
      "Compact drone with 4K video, obstacle avoidance, and intelligent flight modes.",
  },
  {
    id: 7,
    name: "Steam Deck 512GB",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/controller-1869943_1280.jpg",
    rating: 4,
    price: 649,
    description:
      "Handheld gaming PC with powerful hardware and access to your Steam library.",
  },
  {
    id: 8,
    name: "Kindle Paperwhite 11th Gen",
    image:
      "https://cdn.pixabay.com/photo/2018/03/12/14/32/kindle-3212427_1280.jpg",
    rating: 5,
    price: 139,
    description:
      "Waterproof e-reader with high-resolution display and long battery life.",
  },
  {
    id: 9,
    name: "GoPro HERO11 Black",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/19/41/gopro-1283883_1280.jpg",
    rating: 5,
    price: 499,
    description:
      "Action camera with 5.3K video, advanced stabilization, and waterproof design.",
  },
  {
    id: 10,
    name: "Apple Watch Series 9",
    image:
      "https://cdn.pixabay.com/photo/2017/01/18/16/00/apple-watch-1981246_1280.jpg",
    rating: 4,
    price: 449,
    description:
      "Smartwatch with fitness tracking, ECG, blood oxygen, and seamless iPhone integration.",
  },
];

export const Home = () => {
  return (
    <section className="bg-secondary px-6 py-5 text-foreground">
      <h1 className="text-center pt-3 pb-8 text-2xl font-bold">
        Rentaroo, alquila lo que quieras
      </h1>

      <div className="bg-primary rounded-lg py-6 px-8">
        <Filters
          filters={filtersFromAPI}
          onChange={(filters) => {
            console.log("Filtros seleccionados:", filters);
          }}
        ></Filters>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]  gap-5 justify-center mt-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
