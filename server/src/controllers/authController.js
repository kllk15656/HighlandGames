const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

exports.register = async (req, res) => {
  console.log('--- Register request received ---');
  console.log('Request body:', req.body);

  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ error: 'All fields are required' });

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) return res.status(400).json({ error: 'Username already exists' });
      if (existingUser.email === email) return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });

    console.log('User created successfully:', user);

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: user._id, username: user.username, email: user.email }
    });

  } catch (err) {
    console.error('Register FULL ERROR:', err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
};

exports.login = async (req, res) => {
  console.log('--- Login request received ---');
  console.log('Request body:', req.body);

  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'All fields are required' });

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1d' });

    console.log('Login successful for user:', user.username);

    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });

  } catch (err) {
    console.error('Login FULL ERROR:', err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
};
