// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Message from "../components/Message";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // auto hide after 2s
  };

  if (!product) return <p className="p-4 text-white">Product not found.</p>;

  return (
    <div className="min-h-screen bg-orange-100 flex items-center justify-center pb-16">
      <div className="max-w-3xl bg-white text-gray-800 rounded-lg shadow-md p-6 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 object-contain mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl text-primary font-semibold mb-4">
          ${product.price}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-amber-950 hover:bg-primary text-white px-4 py-2 rounded transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

      {/* ✅ Message */}
      <Message message="Added to cart!" show={showMessage} />
    </div>
  );
}

export default ProductDetail;
