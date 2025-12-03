import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("Registering...");

    try {
      const res = await axios.post( "https://highlandgames.onrender.com/api/auth/register",
  form
);
      setMsg("🎉 Registered successfully! Redirecting...");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setMsg(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gold/5">
      {/* Header + Navigation */}
      <Header />
      <Navbar />

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-4 bg-primary-light rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mt-24 mb-8">
          Create an Account
        </h1>

        {/* Response message */}
        {msg && (
          <div className="bg-blue-100 border border-blue-300 text-blue-800 p-3 rounded-xl text-center mb-4">
            {msg}
          </div>
        )}

        {/* Register Form */}
        <form
          onSubmit={onSubmit}
          className="bg-primary-light p-6 rounded-xl shadow-lg space-y-5"
        >
          {/* Username */}
          <div>
            <label className="block text-white font-semibold mb-1">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder="Enter username"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-semibold mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="example@email.com"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white font-semibold mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder="Enter a secure password"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gold text-white font-semibold rounded-lg hover:bg-accent-red transition"
          >
            Register
          </button>

          {/* Login link */}
          <p className="text-white text-center mt-3">
            Already have an account?
            <Link to="/login" className="text-gold underline ml-1 hover:text-accent-yellow">
              Log in
            </Link>
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full bg-primary-light text-white text-center shadow-md fixed bottom-0 left-0 z-50">
        © {new Date().getFullYear()} Paisley's Highland Games
      </footer>
    </div>
  );
}
