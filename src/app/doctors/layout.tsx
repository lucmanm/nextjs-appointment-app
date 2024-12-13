import { SideBar } from "./_components";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <SideBar className="w-1/5 py-4" />
      <div className="w-4/5">{children}</div>
    </section>
  );
}
