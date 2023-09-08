import React, { useEffect, useState } from "react";
import { format, addDays, getDaysInMonth } from "date-fns";
import RootPage from "../root";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const AppointmentBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  let navigate = useNavigate();

  const daysInMonth = getDaysInMonth(new Date());
  const allDates = Array.from({ length: daysInMonth }, (_, i) =>
    addDays(new Date(), i)
  );

  useEffect(() => {
    setAvailableDates(allDates.filter(() => Math.random() > 0.5)); // Randomly select available dates
  }, []);

  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    window.scrollTo({
      top: document.getElementById("Times").offsetTop,
      behavior: "smooth",
    });
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    // Format the date to "Friday, September 8th"
    const formattedDate = format(selectedDate, "EEEE, MMMM do");

    // Navigate to the confirmation page and pass the selected date and time
    navigate("/confirmation", {
      state: {
        selectedDate: formattedDate,
        selectedTime: selectedTime,
      },
    });
  };

  const rows = Math.ceil(daysInMonth / 7);
  const dateStrings = availableDates.map((date) => format(date, "yyyy-MM-dd"));

  return (
    <RootPage header="error">
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="xs:text-3xl text-6xl mt-8 md:text-8xl font-bold mb-6 flex items-center text-center">
          We recommend seeing a specialist. Book an appointment below.
        </h1>

        <table className="table-fixed mt-2">
          <thead>
            <tr>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <th key={index} className="w-1/7 py-2 px-2">
                    {day}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 7 }, (_, colIndex) => {
                  const dateIndex = rowIndex * 7 + colIndex;
                  const date = allDates[dateIndex];
                  return (
                    <td key={colIndex} className="w-1/7 py-2">
                      {date && (
                        <button
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            format(date, "yyyy-MM-dd") ===
                            (selectedDate
                              ? format(selectedDate, "yyyy-MM-dd")
                              : "")
                              ? "bg-[#31C48D] text-white"
                              : dateStrings.includes(format(date, "yyyy-MM-dd"))
                              ? "bg-[#3296BC] text-white"
                              : "border border-[#3296BC] text--[#3296BC]"
                          }`}
                          onClick={() => {
                            if (
                              dateStrings.includes(format(date, "yyyy-MM-dd"))
                            ) {
                              handleDateClick(date);
                            }
                          }}
                          disabled={
                            !dateStrings.includes(format(date, "yyyy-MM-dd"))
                          }
                        >
                          {date ? format(date, "d") : ""}
                        </button>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        {selectedDate && (
          <div id="Times" className="flex flex-wrap justify-center mt-4">
            <h1 className="w-full text-center text-2xl mb-4">Times</h1>
            {availableTimes.map((time, index) => (
              <Button
                key={index}
                className={`m-2 ${
                  selectedTime === time ? "bg-[#31C48D]" : "bg-[#3296BC]"
                }`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        )}
        <div className="mt-8">
          <Button
            className="text-white"
            style={{ backgroundColor: "#31C48D" }}
            onClick={handleSubmit}
            disabled={!selectedDate || !selectedTime}
          >
            Submit
          </Button>
        </div>
      </div>
    </RootPage>
  );
};

export default AppointmentBookingPage;
