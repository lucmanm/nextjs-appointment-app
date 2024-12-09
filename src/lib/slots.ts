export type TimeSlot = {
    datetime: Date;
    time: string;
}

export const getAvailableSlots = async (): Promise<TimeSlot[][]> => {
    const today = new Date();
    const slots: TimeSlot[][] = [];

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const endTime = new Date();
        endTime.setDate(today.getDate() + i);
        endTime.setHours(21, 0, 0, 0);

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

            timeSlot.push({
                datetime: new Date(currentDate),
                time: formattedTime,
            });

            currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        slots.push(timeSlot);
    }

    console.log(slots);
    return slots;
};
