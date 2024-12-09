import { Appointment } from "@/app/appointment/[templateSlug]/_appointment";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";

import { assets, defaultIamge, doctors } from "@/constant/assets";
import { Info } from "lucide-react";
import Image from "next/image";
import RelatedDocotrs from "./_related-doctors";

const Page = async ({ params }: { params: Promise<{ templateSlug: string }> }) => {
  const slug = (await params).templateSlug;
  const doctor = doctors.find((data) => data.name === decodeURIComponent(slug));

  return (
    <div className="container mx-auto  py-5 ">
      <section className="flex max-sm:flex-col max-sm:p-5 gap-4">
        <Card className="max-sm:w-full w-3/4">
          <Image
            src={doctor?.image ? doctor.image : defaultIamge}
            alt={doctor?.name ? doctor.name : defaultIamge}
            height={500}
            width={500}
          />
        </Card>
        <Card className="flex flex-col gap-2 p-6">
          <CardTitle className="flex items-center gap-2">
            <span className="text-xl">{doctor?.name}</span>
            <Image src={assets.verified_icon} alt="Verified Icons" height={24} width={24} />
          </CardTitle>
          <CardDescription className="flex gap-x-2 items-center">
            {doctor?.degree} - {doctor?.speciality}
            <span className="border rounded-full px-2">{doctor?.experience}</span>
          </CardDescription>
          <CardContent className="p-0">
            <span className="flex gap-x-1 py-2 items-center">
              About.
              <Info className="size-4" />
            </span>

            <p>{doctor?.about}</p>
          </CardContent>
          <CardFooter className="p-0 font-bold text-base">
            <span>Appointment Fee.</span>
            <span>$ {doctor?.fees}</span>
          </CardFooter>
        </Card>
      </section>

      {/* Appointment Component */}
      <Appointment />

      {/* Related Doctors  */}
      <RelatedDocotrs speciality={doctor?.speciality} />
    </div>
  );
};

export default Page;
