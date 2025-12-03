import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-gold/5">
      {/* Header + Navigation */}
      <Header />
      <Navbar />

      {/* Main Login Card */}
      <main className="max-w-xl mx-auto px-4 bg-primary-light rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mt-24 mb-8">
          Login
        </h1>

        {/* Success Message */}
        {submitted ? (
          <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-xl shadow mb-10">
            ✅ <b>Login successful!</b> Redirecting to your profile…
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-primary-light p-6 rounded-xl shadow-lg space-y-5"
          >
            {/* Email */}
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

            {/* Password */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gold text-white font-semibold rounded-lg hover:bg-accent-red transition"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-white text-center mt-3">
              Don't have an account?{" "}
              <a href="/register" className="text-gold underline hover:text-accent-yellow">
                Register here
              </a>
            </p>
          </form>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary-light text-white text-center shadow-md fixed bottom-0 left-0 z-50">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
