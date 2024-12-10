import { specialityData } from "@/constant/assets";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SideBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <div className="flex flex-col gap-y-2">
        {specialityData.map((data, id) => (
          <Link
            key={id}
            href={`/doctors/${data.speciality}`}
            className="border p-2 hover:text-slate-950 hover:border-slate-950"
          >
            {data.speciality}
          </Link>
        ))}
      </div>
    </div>
  );
};
