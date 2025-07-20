import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../appwrite/auth";
import Signup from "./Signup";
import service from "../appwrite/config";

function Profile() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await authService.getCurrentUser();
        setIsLoggedIn(true);
        setEmail(user.email);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    await authService.logout("current");
    setIsLoggedIn(false);
    setEmail("");
    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.getCurrentUser({ email, password }); 
      const user = await authService.getCurrentUser();
      setEmail(user.email);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-home">
      {isLoggedIn ? (
        <div className="flex flex-col items-center mt-20 ">
          <h1 className="text-3xl font-bold -translate-y-10">Welcome, User</h1>
          <p className="mt-4 text-lg -translate-y-10">Your order summary is here!</p>
          <button
            onClick={handleLogout}
            className="bg-amber-950 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-3xl font-bold">Not Logged In</h1>
          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-orange-700 text-white px-6 py-2 rounded"
          >
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
