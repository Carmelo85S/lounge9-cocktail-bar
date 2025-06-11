import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bcrypt from "bcryptjs";

import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


const bookingSchema = new mongoose.Schema({
  type: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  message: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username !== process.env.ADMIN_USERNAME) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '2h' });

  res.json({ token });
});


app.get('/booking', authenticate, async (req, res) => {
  try {
    const { type } = req.query;
    const query = {};
    if (type) query.type = type;

    const bookings = await Booking.find(query);
    const bookingType = await Booking.distinct('type');

    res.json({ bookings, bookingType });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/booking', async (req, res) => {
  try {
    const { name, email, date, time, guests, message, type } = req.body;

    if (!name || !email || !date || !time || !guests) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const booking = new Booking({
      name,
      email,
      date: new Date(date),
      time,
      guests,
      type,
      message,
    });

    await booking.save();

    res.status(201).json({ message: "Booking saved and confirmation sent" });

  } catch (error) {
    console.error('Error saving booking or sending email:', error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post('/api/send-confirmation', async (req, res) => {
  const { name, email, date, time, guests, type } = req.body;

  try {
    await transporter.sendMail({
      from: `"Lounge9" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Reservation is Confirmed!',
      html: `
        <h3>Hello ${name},</h3>
        <p>We're happy to confirm your booking:</p>
        <ul>
          <li><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Guests:</strong> ${guests}</li>
          <li><strong>Type:</strong> ${type || 'N/A'}</li>
        </ul>
        <p>Thank you for choosing us!</p>
      `
    });

    res.status(200).json({ message: "Confirmation email sent" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

app.put('/booking/bulk', async (req, res) => {
  try {
    const bookings = [
      { id: '1', type: 'Afterwork', name: 'John Doe', email: 'john@example.com', date: '2024-10-01', time: '19:00', guests: 2, message: 'Looking forward to it!' },
      { id: '2', type: 'Afterwork', name: 'Jane Smith', email: 'jane@example.com', date: '2024-10-02', time: '12:00', guests: 4, message: 'Please reserve a window seat.' },
      { id: '3', type: 'Dinner', name: 'Alice Brown', email: 'alice@example.com', date: '2024-10-03', time: '09:00', guests: 3, message: 'Vegetarian options, please.' },
      { id: '4', type: 'Jazz Night', name: 'Bob Green', email: 'bob@example.com', date: '2024-10-04', time: '20:00', guests: 5, message: 'Celebrating a birthday.' },
      { id: '5', type: 'Jazz Night', name: 'Charlie Black', email: 'charlie@example.com', date: '2024-10-05', time: '13:00', guests: 2, message: 'Quiet table preferred.' },
      { id: '6', type: 'Dinner', name: 'Diana White', email: 'diana@example.com', date: '2024-10-06', time: '18:30', guests: 6, message: 'Anniversary dinner.' },
      { id: '7', type: 'Afterwork', name: 'Ethan Blue', email: 'ethan@example.com', date: '2024-10-07', time: '08:30', guests: 1, message: 'Gluten-free meal.' },
      { id: '8', type: 'Afterwork', name: 'Fiona Red', email: 'fiona@example.com', date: '2024-10-08', time: '12:30', guests: 3, message: 'Outdoor seating if possible.' },
      { id: '9', type: 'Jazz Night', name: 'George Yellow', email: 'george@example.com', date: '2024-10-09', time: '19:30', guests: 4, message: 'Celebrating promotion.' },
      { id: '10', type: 'Afterwork', name: 'Hannah Purple', email: 'hannah@example.com', date: '2024-10-10', time: '10:00', guests: 2, message: 'Vegan options requested.' },
      { id: '11', type: 'Jazz Night', name: 'Ian Orange', email: 'ian@example.com', date: '2024-10-11', time: '13:30', guests: 5, message: 'Business lunch.' },
      { id: '12', type: 'Dinner', name: 'Julia Pink', email: 'julia@example.com', date: '2024-10-12', time: '20:00', guests: 2, message: 'Romantic table.' },
      { id: '13', type: 'Afterwork', name: 'Kevin Gray', email: 'kevin@example.com', date: '2024-10-13', time: '09:30', guests: 3, message: 'Nut allergy.' },
      { id: '14', type: 'Afterwork', name: 'Laura Silver', email: 'laura@example.com', date: '2024-10-14', time: '12:15', guests: 4, message: 'Birthday lunch.' },
      { id: '15', type: 'Dinner', name: 'Mike Gold', email: 'mike@example.com', date: '2024-10-15', time: '19:45', guests: 6, message: 'Family gathering.' }
    ];

    const result = await Booking.insertMany(bookings);

    res.status(201).json({ message: 'Bookings created successfully', bookings: result });

  } catch (error) {
    console.error('Error inserting bookings:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.delete('/booking/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ message: 'Prenotazione non trovata' });
    }

    res.json({ message: 'Prenotazione eliminata con successo' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore del server' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
