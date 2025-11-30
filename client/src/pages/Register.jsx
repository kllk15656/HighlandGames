import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log('Form updated:', { ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setMsg('Registering...');
    console.log('Submitting form:', form);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      console.log('Register response:', res.data);
      setMsg('Registered successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      console.error('Register error response:', err.response || err);
      setMsg(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <section className="max-w-md mx-auto bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold mb-3">Register</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          name="username"
          value={form.username}
          onChange={onChange}
          placeholder="Username"
          className="w-full p-3 border rounded"
        />
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          type="email"
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
        <button className="w-full bg-blue-600 text-white p-3 rounded">Register</button>
      </form>
      <p className="text-center mt-4 text-sm">
        Already have an account?
        <Link to="/login" className="text-blue-600 font-semibold ml-1">Login here</Link>
      </p>
      <p className="mt-3 text-sm text-gray-600">{msg}</p>
    </section>
  );
}
