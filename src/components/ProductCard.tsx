import id from "../pages/product/[id].astro";
import { IProduct } from "../types";
import { useState } from "preact/hooks";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [details, setDetails] = useState(false);
  const toggle = () => setDetails((prev) => !prev);
  return (
    <a class="border rounded mb-2 p-3 block transition-all duration-300 hover:scale-105 ease-out hover:shadow-2xl">
      <a class="cursor-pointer flex mb-2 justify-between items-start" href={`/product/${product.id}`}>
        <div>
        <h2 class="text-lg">{product.title}</h2>
        <p className="font-bold">{product.price}$</p>
        </div>
        <button class="px-5 py-2 text-white rounded-md hover:bg-cyan-300 transition-all duration-150 ease-linear bg-cyan-600">Open..</button>
      </a>
      <button
        onClick={toggle}
        class="border px-4 py-2 bg-yellow-400 text-white"
      >
        Toggle description
      </button>
      {details && <p>{product.description}</p>}
    </a>
  );
}
