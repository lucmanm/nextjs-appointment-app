"use client";
import { Button } from "@/components/ui/button";
import { specialityData } from "@/constant/assets";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";

type SideBarProps = {
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

export const SideBar = ({ ...props }: SideBarProps) => {
  const router = useRouter();
  const params = useParams<{ doctorType: string }>();

  return (
    <div className={cn("", props.className)}>
      <div className="flex flex-col gap-y-2 bg-transparent">
        {specialityData.map((data, id) => (
          <Button
            key={id}
            // href={`/doctors/${data.speciality.toLowerCase()}`}
            onClick={() => {
              props.setIsOpen?.(false);
              router.replace(`/doctors/${data.speciality.toLowerCase()}`);
            }}
            variant="ghost"
            className={`border p-2 rounded-md ${
              data.speciality.toLowerCase() === decodeURIComponent(params.doctorType).toLowerCase()
                ? "bg-slate-950 text-white hover:text-slate-950 hover:bg-white hover:border-slate-950 transition-all duration-300"
                : "hover:border-slate-950"
            }`}
          >
            {data.speciality}
          </Button>
        ))}
      </div>
    </div>
  );
};
