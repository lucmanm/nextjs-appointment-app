import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";
export type TDoctors = {
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
export default function CardDoctors({ doctors }: { doctors: TDoctors[] }) {
  return (
    <div className="grid max-sm:grid-cols-2 gap-4 p-4 grid-cols-4">
      {doctors.length >= 0 &&
        doctors.map((data, idx) => (
          <Link key={idx} href={`/appointment/${encodeURIComponent(data.name)}`}>
            <Card className="pt-4 text-xs max-sm:rounded-md md:text-sm">
              <CardContent className="flex flex-col gap-y-4">
                <Image height={500} width={500} alt={data.name} src={data.image} className="w-full rounded-sm" />
                <CardTitle className="line-clamp-2 leading-4">{data.name}</CardTitle>
                <CardDescription className="line-clamp-2 text-xs md:text-sm">{data.about}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-x-4" onClick={() => {}}>
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
    </div>
  );
}
