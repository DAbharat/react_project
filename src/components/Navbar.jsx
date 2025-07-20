import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const searchRef = useRef();

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    // You can route to a results page or filter products here
  };

  const handleProfileClick = () => {
   
      navigate("/login");
    
  };

  return (
    <nav className="bg-primary p-4 w-full flex justify-between items-center">
      {/* Left: Brand */}
      <Link to="/" className="text-secondary text-xl font-bold">
        EasyShop
      </Link>

      {/* Center: Nav Links */}
      <div className="space-x-6 text-secondary font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-home font-bold" : "hover:text-yellow-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-home font-bold" : "hover:text-yellow-400"
          }
        >
          About Us
        </NavLink>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6 text-secondary relative">
        {/* Search */}
        <div className="relative" ref={searchRef}>
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="hover:text-yellow-400"
            title="Search Items"
          >
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </button>
          {showSearch && (
            <form
              onSubmit={handleSearchSubmit}
              className="absolute right-0 mt-2 bg-white text-black rounded shadow p-2 z-10 transition duration-300 ease-in-out transform"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="border px-2 py-1 rounded"
              />
              <button
                type="submit"
                className="ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Go
              </button>
            </form>
          )}
        </div>

        {/* Profile Icon */}
        <div>
          <button
            onClick={handleProfileClick}
            title={isLoggedIn ? "Your Profile" : "Login"}
            className="hover:text-yellow-400"
          >
            <i className="fa-solid fa-user text-lg"></i>
          </button>
        </div>

        {/* Cart */}
        <Link to="/cart" className="hover:text-home">
          <i className="fa-solid fa-cart-shopping mr-1" />
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
