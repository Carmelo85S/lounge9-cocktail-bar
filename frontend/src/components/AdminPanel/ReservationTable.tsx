import React, { useState } from "react";
import { Reservation } from "../../types/types";
import { Trash2, CheckCircle2, Mail } from "lucide-react";

interface Props {
  reservations: Reservation[];
  onDelete: (id: string) => void;
  deletingId: string | null;
  loading: boolean;
  handleConfirm: (reservation: Reservation) => void;
}

const ROWS_PER_PAGE = 3;

const ReservationTable: React.FC<Props> = ({
  reservations,
  onDelete,
  deletingId,
  loading,
  handleConfirm,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReservationId, setSelectedReservationId] = useState<string | null>(null);

  const totalPages = Math.ceil(reservations.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentReservations = reservations.slice(startIndex, startIndex + ROWS_PER_PAGE);

  const toggleMessage = (id: string) => {
    setSelectedReservationId((prev) => (prev === id ? null : id));
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto border border-gray-300 rounded-lg">
        <table className="w-full table-auto border-collapse text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Guests</th>
              <th className="p-3">Date</th>
              <th className="p-3">Type</th>
              <th className="p-3 min-w-[120px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentReservations.map((r) => (
              <React.Fragment key={r._id}>
                <tr
                  className="border-t border-night/10 hover:bg-amber/10 cursor-pointer"
                  onClick={() => toggleMessage(r._id)}
                >
                  <td className="p-3">{r.name}</td>
                  <td className="p-3">{r.email}</td>
                  <td className="p-3">{r.guests}</td>
                  <td className="p-3">{new Date(r.date).toLocaleDateString()}</td>
                  <td className="p-3">{r.type}</td>
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <button
                        disabled={deletingId === r._id || loading}
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(r._id);
                        }}
                        className="text-red-600 hover:text-red-800 disabled:opacity-50"
                      >
                        <Trash2 size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleConfirm(r);
                        }}
                        className="text-green-600 hover:text-green-800"
                      >
                        <CheckCircle2 size={20} />
                      </button>
                      <a
                        href={`mailto:${r.email}?subject=Regarding your reservation&body=Hi ${r.name},%0D%0A`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </td>
                </tr>
                {selectedReservationId === r._id && r.message && (
                  <tr className="bg-amber/5">
                    <td colSpan={6} className="p-4 text-night text-sm italic">
                      <strong>Message:</strong> {r.message}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {currentReservations.length === 0 && (
          <div className="text-center text-gray-500 p-4 border rounded-lg">No reservations found.</div>
        )}
        {currentReservations.map((r) => (
          <div
            key={r._id}
            onClick={() => toggleMessage(r._id)}
            className="border rounded-lg p-4 shadow-sm hover:bg-amber/10 transition cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{r.name}</h3>
              <div className="flex items-center gap-4 flex-shrink-0">
                <button
                  disabled={deletingId === r._id || loading}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(r._id);
                  }}
                  className="text-red-600 hover:text-red-800 disabled:opacity-50"
                >
                  <Trash2 size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleConfirm(r);
                  }}
                  className="text-green-600 hover:text-green-800"
                >
                  <CheckCircle2 size={20} />
                </button>
                <a
                  href={`mailto:${r.email}?subject=Regarding your reservation&body=Hi ${r.name},%0D%0A`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-700">{r.email}</p>
            <p className="text-sm">Guests: {r.guests}</p>
            <p className="text-sm">Date: {new Date(r.date).toLocaleDateString()}</p>
            <p className="text-sm">Type: {r.type}</p>
            {selectedReservationId === r._id && r.message && (
              <div>
                <p className="text-sm text-night mt-2 italic">
                  <strong>Message:</strong> {r.message}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4 px-3">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-amber text-white rounded disabled:opacity-50 hover:bg-amber-dark transition"
          >
            Previous
          </button>
          <span className="text-night font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-2 bg-amber text-white rounded disabled:opacity-50 hover:bg-amber-dark transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationTable;
