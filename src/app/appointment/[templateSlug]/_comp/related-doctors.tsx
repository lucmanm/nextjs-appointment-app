"use client";

import CardDoctors from "@/components/card-doctors";
import { doctors } from "@/constant/assets";
import { StaticImageData } from "next/image";
import { useState, useEffect, Fragment } from "react";

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
    <Fragment>
      <h2>Related Doctors</h2>
      {relatedDoc.length > 0 ? (
        relatedDoc.map((item, id) => (
          <CardDoctors key={id} doctors={[item]} />
        ))
      ) : (
        <p>No doctors found for the selected speciality.</p>
      )}
    </Fragment>
  );
}
