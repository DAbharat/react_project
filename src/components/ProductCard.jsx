import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <img src={product.image} alt={product.title} className="h-32 object-contain mx-auto" />
      <h2 className="text-sm font-semibold mt-2">{product.title.slice(0, 40)}...</h2>
      <p className="text-blue-700 font-bold">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-black underline">View</Link>
    </div>
  );
}

export default ProductCard;
