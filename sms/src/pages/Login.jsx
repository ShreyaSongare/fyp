import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setError("");

      // ✅ Store user in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ email })
      );

      navigate("/dashboard");

    } catch (error) {
      setError("Server not responding");
    }
  };

  // 🔄 RESET PASSWORD
const handleReset = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/forgot-password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert("Reset link sent to your email 📧");
    setResetEmail("");
    setShowPopup(false);

  } catch (error) {
    alert("Server error");
  }
};



  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p
          className="forgot-link"
          onClick={() => setShowPopup(true)}
        >
          Forgot Password?
        </p>

        <button type="submit">Login</button>
      </form>

      {showPopup && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Reset Password</h3>
            <form onSubmit={handleReset}>
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
              <button type="submit">Send Reset Link</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
