"use client";

import { useEffect, useState } from "react";

import { SlidingNumber } from "@/components/ui/sliding-number";

interface RealTimeClockProps {
  timeZone?: string;
  showSeconds?: boolean;
  hour12?: boolean;
  className?: string;
}

export function RealTimeClock({
  timeZone = "Asia/Kolkata",
  showSeconds = true,
  hour12 = true,
  className = "",
}: RealTimeClockProps) {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Get time in the specified timezone
      const timeInTimezone = new Date(
        now.toLocaleString("en-US", { timeZone })
      );

      let h = timeInTimezone.getHours();
      const m = timeInTimezone.getMinutes();
      const s = timeInTimezone.getSeconds();

      // Convert to 12-hour format if needed
      if (hour12) {
        h = h === 0 ? 12 : h > 12 ? h - 12 : h;
      }

      setHours(h);
      setMinutes(m);
      setSeconds(s);
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timeZone, hour12]);

  return (
    <div className={`flex items-center gap-0.5 font-mono ${className}`}>
      <SlidingNumber value={hours} padStart={true} />
      <span className="text-zinc-500">:</span>
      <SlidingNumber value={minutes} padStart={true} />
      {showSeconds && (
        <>
          <span className="text-zinc-500">:</span>
          <SlidingNumber value={seconds} padStart={true} />
        </>
      )}
    </div>
  );
}
