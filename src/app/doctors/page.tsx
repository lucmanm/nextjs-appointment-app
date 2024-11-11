import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { properties } from "@/constant/properties";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="grid max-sm:grid-cols-2 gap-4 p-4 grid-cols-4 container mx-auto">
      {properties.map((data, idx) => (
        <Link key={idx} href={`/appointment/${encodeURIComponent(data.name)}`}>
          <Card className="pt-4 text-xs max-sm:rounded-md md:text-sm">
            <CardContent className="flex flex-col gap-y-4">
              <Image
                height={100}
                width={100}
                alt={data.name}
                src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full rounded-sm"
              />
              <CardTitle className="line-clamp-2 leading-4">{data.about}</CardTitle>
              <CardDescription className="line-clamp-2 text-xs md:text-sm">{data.about}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-x-4">Book Appointment</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Page;
