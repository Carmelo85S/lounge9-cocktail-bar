import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Reservation {
  _id: string;
  name: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  message?: string;
}

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
    const matchesText = [r.name, r.email, r.date, r.message]
      .filter(Boolean)
      .some((field) =>
        field!.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesDate = selectedDate
      ? new Date(r.date).toDateString() === selectedDate.toDateString()
      : true;

    return matchesText && matchesDate;
  });

  return (
    <main className="min-h-screen bg-cream font-sans p-6 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-night mb-2">
          Reservation Dashboard
        </h1>
        <p className="text-night/70">Monitor and manage all bookings in real time.</p>
      </header>

      <section className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
        <input
          type="search"
          placeholder="Search by name, email or message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:max-w-md px-4 py-2 border border-night/20 rounded-lg focus:ring-2 focus:ring-amber-dark focus:outline-none"
        />

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Filter by date"
          className="px-4 py-2 border border-night/20 rounded-lg"
        />

        <button
          onClick={fetchReservations}
          disabled={loading}
          className="bg-amber hover:bg-amber-dark text-white font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Reload"}
        </button>
      </section>

      {error && (
        <div className="bg-red-100 border border-red-300 text-red-800 p-4 rounded mb-6">
          <strong>Error:</strong> {error}
        </div>
      )}

      {filteredReservations.length === 0 && !loading ? (
        <p className="text-center text-night/60">No reservations found.</p>
      ) : (
        <div className="overflow-auto rounded-lg border border-night/10 shadow-sm">
          <table className="w-full table-auto text-sm text-left text-night">
            <thead className="bg-amber text-white font-semibold">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3 hidden md:table-cell">Guests</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Message</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map((r) => (
                <tr key={r._id} className="border-t border-night/10 hover:bg-amber/10">
                  <td className="p-3 font-medium">{r.name}</td>
                  <td className="p-3">{r.email}</td>
                  <td className="p-3 hidden md:table-cell">{r.guests}</td>
                  <td className="p-3">{new Date(r.date).toLocaleDateString()}</td>
                  <td className="p-3">{r.time}</td>
                  <td className="p-3 whitespace-pre-wrap break-words max-w-xs">{r.message || "-"}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(r._id)}
                      disabled={deletingId === r._id}
                      className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-3 py-1 rounded transition"
                    >
                      {deletingId === r._id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default AdminPanel;
