import Hero from "@/components/hero";
import { assets } from "@/constant/assets";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero/>
      <Image src={assets.appointment_img} alt="Image" width={100} height={100}/>
    </Fragment>
  );
}
