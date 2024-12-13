import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { doctors } from "@/constant/assets";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="my-4 space-y-4 flex-1">
      <Card className="max-sm:text-sm text-xl font-semibold px-4 py-2">
        <span>My Appointments</span>
      </Card>
      {doctors.slice(0, 2).map((data, id) => (
        <Card key={id} className="shadow-sm ">
          <CardContent className="flex p-4 md:p-4  md:h-48 gap-2 md:gap-4 max-sm:grid max-sm:grid-cols-3">
            {/* doctor Image */}
            <Image
              alt={data.name}
              src={data.image}
              width={200}
              height={500}
              className="object-cover bg-blue-200 rounded-md w-36 shrink"
            />

            {/* Doctor Information */}
            <div className="grow *:block *:max-sm:text-sm max-sm:col-span-2">
              <h2 className="text-lg font-semibold ">{data.name}</h2>
              <i>{data.speciality}</i>
              <b>Address:</b>
              <address>
                {data.address.line1} <br />
                {data.address.line2}
              </address>
              <span>Date & Time: 13, December, 2024 | 8:30PM</span>
            </div>

            {/* Buttons actions */}
            <div className="grid grid-cols-1 gap-4 md:gap-2 content-end max-sm:col-span-3 max-sm:grid-cols-2">
              <Button>Pay Online</Button>
              <Button className="" variant={"destructive"}>
                Cancel Appointment
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Page;
