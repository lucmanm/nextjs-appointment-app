import { properties } from "@/constant/properties";
import React from "react";

const Page = async ({ params }: { params: Promise<{ "template-slug": string }> }) => {
  const slug = (await params)["template-slug"];
  const doctor = properties.find((data) => data.name === decodeURIComponent(slug));
  return <div className="container mx-auto py-5">{doctor?.about}</div>;
};

export default Page;
