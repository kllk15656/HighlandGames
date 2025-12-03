import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Handle each input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit login form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Logging in...");

    try {
      const res = await axios.post(
        "https://highlandgames.onrender.com/api/auth/login",
        formData
      );

      console.log("Login success:", res.data);

      // Save token (optional)
      localStorage.setItem("token", res.data.token);

      setSubmitted(true);
      setMsg("Login successful! Redirecting...");

      // redirect after 1 sec
      setTimeout(() => navigate("/profile"), 1200);

    } catch (err) {
      console.error("Login error:", err.response?.data);
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gold/5">
      <Header />
      <Navbar />

      <main className="max-w-xl mx-auto px-4 bg-primary-light rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mt-24 mb-8">
          Login
        </h1>

        {msg && (
          <div className="bg-blue-100 border border-blue-300 text-blue-800 p-3 rounded-xl text-center mb-4">
            {msg}
          </div>
        )}

        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="bg-primary-light p-6 rounded-xl shadow-lg space-y-5"
          >
            <div>
              <label className="block text-white font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gold text-white font-semibold rounded-lg hover:bg-accent-red transition"
            >
              Login
            </button>

            <p className="text-white text-center mt-3">
              Don't have an account?
              <a
                href="/register"
                className="text-gold underline ml-1 hover:text-accent-yellow"
              >
                Register here
              </a>
            </p>
          </form>
        )}
      </main>

      <footer className="w-full bg-primary-light text-white text-center shadow-md fixed bottom-0 left-0 z-50">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
