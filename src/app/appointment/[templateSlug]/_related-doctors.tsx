"use client";

import CardDoctors from "@/components/card-doctors";
import { doctors } from "@/constant/assets";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type TRelatedDoctor = {
  _id: string;
  name: string;
  image: StaticImageData;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: {
    line1: string;
    line2: string;
  };
};

export default function RelatedDoctors({ speciality }: { speciality?: string }) {
  const [relatedDoc, setRelatedDoc] = useState<TRelatedDoctor[]>([]);

  // Fetch related doctors when the component mounts or when `speciality` changes
  useEffect(() => {
    if (speciality) {
      const relatedDoctor = doctors.filter((doctor) => doctor.speciality === speciality);
      setRelatedDoc(relatedDoctor);
    }
  }, [speciality]);

  return (
    <section className=" p-4">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-2">Related Doctors</h2>
      {relatedDoc.length > 0 ? (
        <CardDoctors doctors={relatedDoc} />
      ) : (
        <p>No doctors found for the selected speciality.</p>
      )}
    </section>
  );
}
