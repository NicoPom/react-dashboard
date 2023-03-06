import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState<Date>(new Date());

  // update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="clock widget">
      <h2>Time</h2>
      <p>
        {date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <h2>Date</h2>
      <p>
        {date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}
      </p>
    </div>
  );
}

export default Clock;
