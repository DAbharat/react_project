import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, getTotalAmount } = useCart();
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before proceeding to payment.");
      return;
    }
    navigate("/payment");
  };

  return (
    <div className="bg-home min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Cart Items */}
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">
            {cart.length} Items Selected
          </h3>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4 mb-4"
            >
              <input
                type="checkbox"
                checked={item.selected}
                readOnly
                className="w-5 h-5"
              />

              <img
                src={item.image || "https://via.placeholder.com/100"}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h4 className="text-md font-bold">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-blue-600 font-medium">${item.price}</p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-medium">Qty:</span>
                  <select
                    className="border rounded px-2 py-1"
                    value={item.quantity}
                    onChange={() => {}} // wire this up if needed
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1}>{n + 1}</option>
                    ))}
                  </select>
                </div>

                <button className="text-red-500 text-sm mt-2">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Order Summary */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="font-bold flex justify-between mb-2">
            <span>Items:</span>
            <span>{cart.length}</span>
          </div>
          <div className="font-bold flex justify-between mb-2">
            <span>Delivery:</span>
            <span className="text-green-600 font-semibold">Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span>
            <span>${getTotalAmount().toFixed(2)}</span>
          </div>

          <button
            onClick={handleProceedToPayment}
            className="w-full bg-amber-950 hover:bg-primary text-home font-semibold py-2 px-4 rounded transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
