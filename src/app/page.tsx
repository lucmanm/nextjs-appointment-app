import CardDoctors from "@/components/card-doctors";
import Hero from "@/components/hero";
import { doctors } from "@/constant/assets";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="space-y-2">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Top Doctors to Book</h1>
          <span>Simply browse through our extensive list of trusted doctors.</span>
        </div>
        {/* doctor List */}

        <CardDoctors doctors={doctors} />
      </div>
    </Fragment>
  );
}
