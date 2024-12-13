import { Filter } from "@/components/filter";
import { SideBar } from "./_components";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex py-4">
      <SideBar className="w-1/5 hidden md:block" />
      <div className="w-4/5 p-4">
        <Filter className="md:hidden" />
        {children}
      </div>
    </section>
  );
}
