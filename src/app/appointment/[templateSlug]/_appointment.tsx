"use client";

import { Button } from "@/components/ui/button";
import { getAvailableSlots, TimeSlot } from "@/lib/slots";
import { useEffect, useState } from "react";

export const Appointment = () => {
  const [docSlots, setDocSlots] = useState<TimeSlot[][]>([]);
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    const fetchSlots = async () => {
      const slots = await getAvailableSlots();
      setDocSlots(slots);
    };

    fetchSlots();
  }, []);

  return (
    <div className="py-8">
      {/* Days of week */}
      <div className="flex py-1 items-center gap-3 ">
        {docSlots.map(
          (items, dayIndex) =>
            items.length > 0 && (
              <Button
                key={dayIndex}
                onClick={() => setSlotIndex(dayIndex)}
                className="rounded-full flex flex-col items-center border text-xs h-fit w-14 py-6"
              >
                <span className="font-bold capitalize">{dayOfWeek[items[0].datetime.getDay()]}</span>
                <span className="font-bold capitalize">{items[0].datetime.getDate()}</span>
              </Button>
            )
        )}
      </div>

      {/* Booking Time */}
      <div className="flex py-1 items-center gap-3 text-sm flex-wrap">
        {docSlots.length > 0 &&
          docSlots[slotIndex]?.map((items, idx) => (
            <Button
              onClick={() => setSlotTime(items.time)}
              key={idx}
              className={`hover:bg-slate-950 hover:text-white border ${
                items.time === slotTime ? "bg-slate-950 text-white" : "bg-none"
              }`}
              variant="ghost"
            >
              {items.time.toLowerCase()}
            </Button>
          ))}
      </div>
    </div>
  );
};
