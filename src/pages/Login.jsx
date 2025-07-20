import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../appwrite/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // ✅ Auto-redirect if session already exists
  useEffect(() => {
    const checkIfLoggedIn = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          console.log("Already logged in:", user);
          navigate("/profile");
        }
      } catch (error) {
        console.log("No session, safe to proceed.");
      }
    };
    checkIfLoggedIn();
  }, [navigate]);

  const handleNext = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setStep(2);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (step !== 2 || password.trim() === "") return;

    try {
      // ✅ Only try login if not already logged in
      const currentUser = await authService.getCurrentUser();
      if (currentUser) {
        console.log("Already logged in. Redirecting...");
        return navigate("/profile");
      }
    } catch {
      // No active session, proceed to login
      try {
        await authService.login({ email, password });
        console.log("Logged in successfully!");
        navigate("/profile");
      } catch (loginErr) {
        console.error("Login error:", loginErr);
        alert("Login failed. Check your credentials.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-home">
      <div className="bg-primary p-8 h-[550px] w-[450px] rounded-lg flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-home mb-4">
          Login
        </h2>
        <div className="flex flex-col justify-center flex-grow text-center">
          <form
            onSubmit={step === 1 ? handleNext : handleLogin}
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
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-b-2 border-home bg-transparent focus:outline-none text-home placeholder-home"
                required
              />
            )}

            <button
              type="submit"
              className="w-full bg-[#7a3202] text-white py-2 rounded hover:bg-[#5a2400] transition"
            >
              {step === 1 ? "Next" : "Login"}
            </button>
          </form>

          <div className="text-center mt-4">
            <Link
              to="/signup"
              className="text-secondary text-sm hover:underline"
            >
              New to our shop? Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
