import { useState } from "react";
import "./Login.css";

export default function Login({ onLogin, onClose }) {
  // State Management
  const [username, setUsername] = useState(""); // Stores the username input
  const [password, setPassword] = useState(""); // Stores the password input
  const [error, setError] = useState(""); // Stores error messages

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    if (username === "hacker" && password === "htn2025") {
      onLogin(); // Trigger login success
      setError(""); // Clear any previous errors
    } else {
      setError("Invalid username or password"); // Show error message
    }
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <button onClick={onClose} className="login-modal-close">
          ✕
        </button>

        <h1 className="text-3xl font-bold text-amber-400 mb-6">Login</h1>

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          {/* Username field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-cyan-400 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-indigo-800 text-white rounded-md"
              required
            />
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-cyan-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-indigo-800 text-white rounded-md"
              required
            />
          </div>

          {error && <p className="text-rose-500 mb-4">{error}</p>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}