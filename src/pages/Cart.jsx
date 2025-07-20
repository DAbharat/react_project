import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  function handleOrder() {
    navigate("/Checkout");
  }

  const { cart, removeFromCart, toggleItemSelection, updateQuantity } =
    useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const selectedItems = cart.filter((item) => item.selected);
  const selectedCount = selectedItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const total = selectedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-home p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="md:col-span-2 ">
        <h2 className="text-2xl font-bold text-primary">
          {selectedCount}/{totalItems} Items Selected
        </h2>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen w-full transform translate-x-50 -translate-y-16">
            <img
              src="https://img.icons8.com/fluency/96/000000/shopping-cart.png"
              alt="Empty Cart"
              className="mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
              Your cart is empty
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Looks like you haven't added anything to your cart yet.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-amber-950 hover:bg-primary text-white px-8 py-3 rounded font-semibold transition text-lg"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center mt-4 bg-white p-4 rounded shadow gap-4"
            >
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => toggleItemSelection(item.id)}
                className="w-5 h-5 accent-blue-600"
              />

              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="text-blue-600 font-semibold">${item.price}</p>

                <div className="mt-2 flex items-center space-x-2">
                  <label className="text-sm font-semibold">Qty:</label>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="border rounded px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  className="text-red-500 text-sm mt-2 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      {cart.length > 0 && (
        <div className="bg-white p-6 rounded shadow h-fit sticky top-8 mt-12">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <p className="mb-2">
            Items: <span className="text-gray-700">{selectedCount}</span>
          </p>
          <p className="mb-2">
            Delivery: <span className="text-green-600">Free</span>
          </p>

          <hr className="my-2" />

          <p className="font-bold text-lg">
            Total: <span className="text-black">${total.toFixed(2)}</span>
          </p>

          <button
            onClick={handleOrder}
            className="w-full mt-4 bg-amber-950 hover:bg-primary text-home font-semibold py-2 rounded cursor-pointer"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
