import { SideBar } from "./_components";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <SideBar className="w-1/4 py-4" />
      <div className="w-3/">{children}</div>
    </section>
  );
}
