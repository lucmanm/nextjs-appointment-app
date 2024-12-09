import CardDoctors from "@/components/card-doctors";
import { doctors, specialityData } from "@/constant/assets";
import Image from "next/image";
import React from "react";

export const Title = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center space-y-2">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <span className="text-sm">{description}</span>
  </div>
);

export const Speciality = () => (
  <div className="flex flex-col items-center gap-4 lg:my-8">
    {/* Title header */}
    <Title
      title="Top Doctors to Book"
      description="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
    />

    {/* spaciality list */}
    <div className="flex gap-8 text-sm">
      {specialityData.map((data, id) => (
        <div key={id} className="items-center flex flex-col justify-evenly space-y-2">
          <Image src={data.image} alt={data.speciality} height={100} width={100} />
          <span>{data.speciality}</span>
        </div>
      ))}
    </div>
  </div>
);

export const TopDoctors = () => (
  <div className="space-y-2 lg:my-8">
    {/* Title */}
    <Title title="Top Doctors to Book" description="Simply browse through our extensive list of trusted doctors." />
    {/* doctor List */}
    <CardDoctors doctors={doctors} />
  </div>
);
