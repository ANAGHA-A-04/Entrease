const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Admin = require('../models/admin');

// USER SIGNUP
exports.userSignup = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  console.log('Signup request:', req.body);
  if (password !== confirmPassword)
    return res.status(400).json({ msg: 'Passwords do not match' });

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'User already exists' });

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hash });
    await user.save();
    res.status(201).json({user, msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'User registration failed' });
  }
};

// ADMIN SIGNUP
exports.adminSignup = async (req, res) => {
  const { administration, administrationName, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    return res.status(400).json({ msg: 'Passwords do not match' });

  try {
    const existing = await Admin.findOne({ administrationName });
    if (existing) return res.status(400).json({ msg: 'Admin already exists' });

    const hash = await bcrypt.hash(password, 10);
    const admin = new Admin({ administration, administrationName, password: hash });
    await admin.save();
    res.status(201).json({ msg: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Admin registration failed' });
  }
};

// USER SIGNIN
exports.userSignin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ msg: 'Incorrect password' });

    res.json({ msg: 'User login successful', userId: user._id });
  } catch (err) {
    res.status(500).json({ msg: 'User login failed' });
  }
};

// ADMIN SIGNIN
exports.adminSignin = async (req, res) => {
  const { administrationName, password } = req.body;
  try {
    const admin = await Admin.findOne({ administrationName });
    if (!admin) return res.status(404).json({ msg: 'Admin not found' });

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) return res.status(400).json({ msg: 'Incorrect password' });

    res.json({
      msg: 'Admin login successful',
      adminId: admin._id,
      administration: admin.administration
    });
  } catch (err) {
    res.status(500).json({ msg: 'Admin login failed' });
  }
};

// SUPERADMIN SIGNIN (Fixed credentials)
exports.superadminSignin = async (req, res) => {
  const { superadminId, name, password } = req.body;
  try {
    if (
      superadminId === process.env.SUPERADMIN_ID &&
      name === process.env.SUPERADMIN_NAME &&
      password === process.env.SUPERADMIN_PASSWORD
    ) {
      return res.json({ msg: 'Superadmin login successful' });
    } else {
      return res.status(400).json({ msg: 'Invalid Superadmin credentials' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Superadmin login failed' });
  }
};
