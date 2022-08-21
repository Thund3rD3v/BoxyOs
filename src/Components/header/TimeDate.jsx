import React, { useEffect } from "react";

export default function TimeDate() {
  const locale = "en";
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 1 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.getDate();
  const month = today.toLocaleDateString(locale, {
    month: "2-digit",
  });
  const year = today.getFullYear();
  const date = `${month}/${day}/${year}`;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div className="text-white flex gap-3">
      <span>{`${time}`}</span>
      <span>{`${date}`}</span>
    </div>
  );
}
