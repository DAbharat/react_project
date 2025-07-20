import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../appwrite/auth"; // update this path as needed
import { ID } from "appwrite";

function Signup({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setStep(2);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (step !== 2 || password.trim() === "") return;

    try {
      // Create user account using authService
      await authService.createAccount({ email, password });

      // Log in the user after sign-up
      await authService.login({ email, password });

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      setIsLoggedIn(true);
      navigate("/profile");
    } catch (err) {
      console.error("Signup Error:", err);
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-home ">
      <div className="bg-primary p-8 h-[550px] w-[450px] rounded-lg flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-home mb-4">
          Signup
        </h2>

        <div className="flex flex-col justify-center flex-grow text-center">
          <form
            onSubmit={step === 1 ? handleNext : handleSignup}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-b-2 border-home bg-transparent focus:outline-none text-home placeholder-home"
              required
              disabled={step === 2}
            />

            {step === 2 && (
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-b-2 border-home bg-transparent focus:outline-none text-home placeholder-home"
                required
              />
            )}

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-[#7a3202] text-white py-2 rounded hover:bg-[#5a2400] transition"
            >
              {step === 1 ? "Next" : "Signup"}
            </button>
          </form>

          <div className="text-center mt-4">
            <Link to='/login' className="text-secondary text-sm hover:underline">Already a user? Click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
