import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  message: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

app.get('/booking', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/booking', async (req, res) => {
  try {
    const { name, email, date, time, guests, message } = req.body;

    if (!name || !email || !date || !time || !guests) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const booking = new Booking({
      name,
      email,
      date: new Date(date),
      time,
      guests,
      message,
    });

    await booking.save();
    res.status(201).json({ message: "Booking saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
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
