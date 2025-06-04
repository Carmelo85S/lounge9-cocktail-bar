import { useEffect, useState } from "react";
import GuestChart from "./GuestChart";

interface Booking {
  _id: string;
  date: string;  // ISO string
  guests: number;
  // other fields omitted
}

const ReservationsStats = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [aggregatedData, setAggregatedData] = useState<{ date: string; guests: number }[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/booking")
      .then((res) => res.json())
      .then((data: Booking[]) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  useEffect(() => {
    const map = new Map<string, number>();

    bookings.forEach(({ date, guests }) => {
      // Convert ISO string to YYYY-MM-DD
      const day = new Date(date).toISOString().slice(0, 10);
      map.set(day, (map.get(day) || 0) + guests);
    });

    const aggregated = Array.from(map, ([date, guests]) => ({ date, guests }));
    setAggregatedData(aggregated);
  }, [bookings]);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Guests per Day</h2>
      <GuestChart data={aggregatedData} />
    </section>
  );
};

export default ReservationsStats;
