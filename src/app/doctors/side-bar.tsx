"use client";
import { specialityData } from "@/constant/assets";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

type SideBarProps = {
  className?: string;
};

export const SideBar = ({ ...props }: SideBarProps) => {
  const params = useParams<{ doctorType: string }>();

  return (
    <div className={cn("", props.className)}>
      <div className="flex flex-col gap-y-2 bg-transparent">
        {specialityData.map((data, id) => (
          <Link
            key={id}
            href={`/doctors/${data.speciality.toLowerCase()}`}
            className={`border p-2 rounded-md ${
              data.speciality.toLowerCase() === decodeURIComponent(params.doctorType).toLowerCase()
                ? "bg-slate-950 text-white hover:text-slate-950 hover:bg-white hover:border-slate-950 transition-all duration-300"
                : "hover:border-slate-950"
            }`}
          >
            {data.speciality}
          </Link>
        ))}
      </div>
    </div>
  );
};