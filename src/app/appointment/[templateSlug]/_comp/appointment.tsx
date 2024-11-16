"use client";

import { Button } from "@/components/ui/button";
import { Fragment, useEffect, useState } from "react";

interface TimeSlot {
  datetime: Date;
  time: string;
}

export const Appointment = () => {
  const [docSlots, setDocSlots] = useState<TimeSlot[][]>([]);
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getAvailableSlots = async () => {
    const today = new Date();

    const slots: TimeSlot[][] = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // Setting start time
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() >= 10 ? currentDate.getHours() + 1 : 10);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlot: TimeSlot[] = [];

      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Add slot to array
        timeSlot.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slots.push(timeSlot);
    }

    console.log(slots);

    setDocSlots(slots);
  };

  // Use useEffect to call getAvailableSlots only after the component mounts
  useEffect(() => {
    getAvailableSlots();
  }, []);

  return (
    <Fragment>
      {docSlots.map((items, dayIndex) => (
        <div key={dayIndex}>
          <Button className="rounded-full flex">
            <span className="font-bold text-lg mt-4 capitalize">{dayOfWeek[items[0].datetime.getDay()]}</span>
            <span className="font-bold text-lg mt-4 capitalize">{items[0].datetime.getDate()}</span>
          </Button>
          {items.map((slot, slotIndex) => (
            <div key={slotIndex}>
              <span>{slot.time}</span>
            </div>
          ))}
        </div>
      ))}
    </Fragment>
  );
};
