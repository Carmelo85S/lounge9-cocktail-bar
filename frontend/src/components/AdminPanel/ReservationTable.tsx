import { Reservation } from "../../types/types";

interface Props {
  reservations: Reservation[];
  onDelete: (id: string) => void;
  deletingId: string | null;
  loading: boolean;
  handleConfirm: (reservation: Reservation) => void;
}


const ReservationTable: React.FC<Props> = ({
  reservations,
  onDelete,
  deletingId,
  loading,
  handleConfirm,
}) => {
  if (reservations.length === 0 && !loading)
    return <p className="text-center text-night/60">No reservations found.</p>;

  return (
    <div className="overflow-auto rounded-lg border border-night/10 shadow-sm">
      <table className="w-full table-auto text-sm text-left text-night">
        <thead className="bg-amber text-white font-semibold">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3 hidden md:table-cell">Guests</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3 hidden md:table-cell">Type</th>
            <th className="p-3">Message</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr
              key={r._id}
              className="border-t border-night/10 hover:bg-amber/10"
            >
              <td className="p-3 font-medium">{r.name}</td>
              <td className="p-3">{r.email}</td>
              <td className="p-3 hidden md:table-cell">{r.guests}</td>
              <td className="p-3">
                {new Date(r.date).toLocaleDateString()}
              </td>
              <td className="p-3">{r.time}</td>
              <td className="p-3 hidden md:table-cell">{r.type || "-"}</td> {/* 👈 AGGIUNTO */}
              <td className="p-3 whitespace-pre-wrap break-words max-w-xs">
                {r.message || "-"}
              </td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() => onDelete(r._id)}
                  disabled={deletingId === r._id}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-3 py-1 rounded transition"
                >
                  {deletingId === r._id ? "Deleting..." : "Delete"}
                </button>

                <button
                  onClick={() => handleConfirm(r)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition"
                >
                  Confirm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
