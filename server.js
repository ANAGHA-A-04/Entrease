const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/formrouter');
const adminRoutes = require('./routes/adminroutes');
const superadminRoutes = require('./routes/superadmin');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATA, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/formrouter', userRoutes);
app.use('/api/adminroutes', adminRoutes);
app.use('/api/superadmin', superadminRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));