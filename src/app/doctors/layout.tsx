import { SideBar } from "./side-bar";
import FilterSheet from "./filter-sheet";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex py-4 gap-4 flex-1 w-full">
      <SideBar className="hidden md:block py-4 md:w-1/5" />
      <div className="max-sm:p-4 flex-1">
        <FilterSheet />
        {children}
      </div>
    </section>
  );
}
