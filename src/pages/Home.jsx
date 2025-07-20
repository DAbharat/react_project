// src/pages/Home.jsx
import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  return (
    <div className="min-h-screen bg-home px-4 py-8">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
            />
            <h2 className="text-md font-semibold mt-2 truncate">{product.title}</h2>
            <p className="text-primary font-bold">${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className="mt-3 bg-amber-950 text-white px-4 py-2 w-full rounded hover:bg-primary cursor-pointer">
                View
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
