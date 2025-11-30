import React, { useState } from "react";
// Import the calendar library
import Calendar from "react-calendar";
// Import default calendar styles
import "react-calendar/dist/Calendar.css";

export default function CalendarWidget() {
  // State to store the currently selected date
  const [date, setDate] = useState(new Date());

  return (
    // Main container box
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mx-auto">

      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-3">Calendar</h2>

      {/* Calendar component */}
      <Calendar
        onChange={setDate}      // Updates selected date
        value={date}           // Current selected value
        className="rounded-lg border border-gray-300 p-2" // Tailwind styling
      />

      {/* Shows the selected date under the calendar */}
      <p className="text-center text-gray-700 mt-3">
        <strong>Selected:</strong> {date.toDateString()}
      </p>
    </div>
  );
}
