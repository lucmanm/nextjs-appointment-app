import Hero from "@/components/hero";
import { Fragment } from "react";
import { Speciality, TopDoctors } from "./_components";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      {/* Speciality  */}
      <Speciality />
      {/* top doctors */}
      <TopDoctors />

    </Fragment>
  );
}
