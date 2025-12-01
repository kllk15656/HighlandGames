import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log('Form updated:', { ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setMsg('Logging in...');
    console.log('Submitting login form:', form);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      console.log('Login response:', res.data);

      // Save token to localStorage (optional for real app)
      localStorage.setItem('token', res.data.token);

      setMsg('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 1000); // redirect to home or dashboard

    } catch (err) {
      console.error('Login error response:', err.response || err);
      setMsg(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <section className="max-w-md mx-auto bg-primary p-4 rounded shadow">
      <h1 className="text-xl font-bold mb-3">Login</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          name="username"
          value={form.username}
          onChange={onChange}
          placeholder="Username"
          className="w-full p-3 border rounded"
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Password"
          type="password"
          className="w-full p-3 border rounded"
        />
        <button className="w-full bg-gold text-black p-3 rounded">Login</button>
      </form>
      <p className="text-center text-white mt-4 text-sm">
        Don’t have an account?
        <Link to="/register" className="text-blue-600 font-semibold ml-1">Register here</Link>
      </p>
      <p className="mt-3 text-sm text-white">{msg}</p>
    </section>
  );
}
