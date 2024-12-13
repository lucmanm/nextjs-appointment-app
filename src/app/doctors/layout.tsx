import { SideBar } from "./_components";
import FilterSheet from "./filter-sheet";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex py-4 gap-4">
      <SideBar className="md:w-1/5 hidden md:block py-4" />
      <div className="md:w-4/5 space-y-4 max-sm:p-4">
        <FilterSheet />
        {children}
      </div>
    </section>
  );
}
