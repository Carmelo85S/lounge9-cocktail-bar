import React, { useEffect, useState } from "react";
import { Reservation } from "../../../types/types";

interface Props {
  bookings?: Reservation[];
}

const ReservationsStats: React.FC<Props> = ({ bookings }) => {
  const [stats, setStats] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    if (!Array.isArray(bookings)) return;

    const map = new Map<string, number>();
    bookings.forEach(({ date, guests }) => {
      const day = new Date(date).toISOString().slice(0, 10);
      map.set(day, (map.get(day) || 0) + (guests ?? 1));
    });

    setStats(map);
  }, [bookings]);

  const entries = [...stats.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  if (stats.size === 0) {
    return (
      <section className="px-4 bg-white rounded shadow-sm text-center text-gray-500">
        No reservation data available.
      </section>
    );
  }

  return (
    <section className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-night mb-4 border-b border-gray-200 pb-2">
        Reservation Summary
      </h2>

      <ul
        className="divide-y divide-gray-200 overflow-y-auto max-h-40 pr-2"
        id="reservation-stats-list"
      >
        {entries.map(([date, guestCount]) => (
          <li
            key={date}
            className="flex justify-between py-2 text-night hover:bg-amber-light transition-colors rounded"
            aria-label={`Date ${date} with ${guestCount} guests`}
          >
            <time dateTime={date} className="font-medium">
              {new Date(date).toLocaleDateString(undefined, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span className="font-semibold text-amber-dark">{guestCount} guests</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReservationsStats;
