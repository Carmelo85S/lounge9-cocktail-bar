import React, { useEffect, useState } from "react";
import { Reservation } from "../../types/types";
import SearchBar from "../../components/AdminPanel/SearchBar";
import DateFilter from "../../components/AdminPanel/DateFilter";
import ReservationTable from "../../components/AdminPanel/ReservationTable";
import ErrorAlert from "../../components/AdminPanel/ErrorAlert";
import ReservationsStats from "../../components/AdminPanel/ReservationStats/ReservationStats";
import GuestsChart from "../../components/AdminPanel/ReservationStats/GuestChart";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminPanel: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [typeFilter, setTypeFilter] = useState("");
  const [bookingTypes, setBookingTypes] = useState<string[]>([]);

  const [allReservations, setAllReservations] = useState<Reservation[]>([]);

  const BASE_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
  try {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/booking`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch reservations");
    const data = await res.json();

    setReservations(data.bookings);
    setAllReservations(data.bookings);

    const uniqueTypes = Array.from(new Set(data.bookings.map((b: Reservation) => b.type)));
    setBookingTypes(uniqueTypes as string[]);
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
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/booking/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    const lowerSearch = searchTerm.trim().toLowerCase();
    const matchesText = r.name?.toLowerCase().startsWith(lowerSearch);

    const isSameDay = (d1: Date, d2: Date) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    const matchesDate = selectedDate
      ? isSameDay(new Date(r.date), selectedDate)
      : true;

    const matchesType = typeFilter ? r.type === typeFilter : true;

    return matchesText && matchesDate && matchesType;
  });

  const handleConfirm = async (reservation: Reservation) => {
    try {
      await axios.post(`${BASE_URL}/api/send-confirmation`, reservation);
      alert("Confirmation sent!");
    } catch {
      alert("Failed to send confirmation.");
    }
  };

    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };

  return (
    <main className="min-h-screen bg-cream font-sans max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center gap-10">
        {/* Sidebar - collapses on small screens */}
        <aside className="w-full lg:max-w-sm bg-white rounded-2xl shadow-lg p-3 lg:sticky lg:top-8 h-fit border border-gray-200">
          <h1 className="text-2xl font-serif font-bold text-night mb-6">
            Filters
          </h1>

          <div className="mb-2">
            <label className="block text-sm font-medium text-night mb-2">
              Search
            </label>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-night mb-2">
              Date
            </label>
            <DateFilter selected={selectedDate} onChange={setSelectedDate} />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-night mb-2">
              Type
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-night font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-dark"
            >
              <option value="">All Types</option>
              {bookingTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={fetchReservations}
            disabled={loading}
            className="w-full mt-4 bg-amber hover:bg-amber-dark text-white font-semibold px-5 py-3 rounded-lg transition disabled:opacity-50 shadow-md"
            aria-label="Reload reservations"
          >
            {loading ? "Loading..." : "Reload"}
          </button>
          <div className="mt-2 border-t border-gray-300 pt-8">
                <ReservationsStats bookings={reservations} />
              </div>
        </aside>

        {/* Main Content */}
        <div className="w-full py-4 flex justify-between flex-col">
          <div className="flex flex-row justify-between items-center px-3 gap-4 mb-6">
          <header>
            <h2 className="text-3xl font-serif font-bold text-night">
              Reservation Dashboard
            </h2>
            <p className="text-night/70 text-lg">
              Monitor and manage all bookings in real time.
            </p>
          </header>
              <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
              aria-label="Logout"
            >
              Logout
            </button>
          </div>

          {error && <ErrorAlert message={error} />}

          <ReservationTable
            reservations={filteredReservations}
            onDelete={handleDelete}
            deletingId={deletingId}
            loading={loading}
            handleConfirm={handleConfirm}
          />

          {reservations.length > 0 && (
            <div className="mt-10">
              <GuestsChart data={
                allReservations.map((r) => ({
                  date: new Date(r.date).toISOString().split("T")[0],
                  guests: r.guests ?? 1,
                }))
              } />

            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminPanel;
