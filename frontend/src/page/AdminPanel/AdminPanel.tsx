import React, { useEffect, useState } from "react";
import { Reservation } from "../../types/types";
import SearchBar from "../../components/AdminPanel/SearchBar";
import DateFilter from "../../components/AdminPanel/DateFilter";
import ReservationTable from "../../components/AdminPanel/ReservationTable";
import ErrorAlert from "../../components/AdminPanel/ErrorAlert";
import ReservationsStats from "../../components/ReservationStats/ReservationStats";
import axios from "axios";


const AdminPanel: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:3000/booking");
      if (!res.ok) throw new Error("Failed to fetch reservations");
      const data = await res.json();
      setReservations(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this reservation?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`http://localhost:3000/booking/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete reservation.");
      setReservations((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setDeletingId(null);
    }
  };

  const filteredReservations = reservations.filter((r) => {
    const matchesText = [r.name, r.email, r.date, r.type, r.message]
      .filter(Boolean)
      .some((field) =>
        field!.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesDate = selectedDate
      ? new Date(r.date).toDateString() === selectedDate.toDateString()
      : true;

    return matchesText && matchesDate;
  });

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleConfirm = async (reservation: Reservation) => {
    try {
      await axios.post(`${BASE_URL}/api/send-confirmation`, reservation);
      alert("Confirmation sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send confirmation.");
    }
  };



  return (
    <main className="min-h-screen bg-cream font-sans p-6 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-night mb-2">Reservation Dashboard</h1>
        <p className="text-night/70">Monitor and manage all bookings in real time.</p>
      </header>

      <section className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <DateFilter selected={selectedDate} onChange={setSelectedDate} />
        <button
          onClick={fetchReservations}
          disabled={loading}
          className="bg-amber hover:bg-amber-dark text-white font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Reload"}
        </button>
      </section>

      {error && <ErrorAlert message={error} />}

      <ReservationTable
        reservations={filteredReservations}
        onDelete={handleDelete}
        deletingId={deletingId}
        loading={loading}
        handleConfirm={handleConfirm}
      />
      <ReservationsStats />
    </main>
  );
};

export default AdminPanel;
