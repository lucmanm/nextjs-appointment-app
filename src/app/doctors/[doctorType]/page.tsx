import CardDoctors from "@/components/card-doctors";
import { doctors } from "@/constant/assets";

const Page = async ({ params }: { params: Promise<{ doctorType: string }> }) => {
  const slug = (await params).doctorType;

  const doctorsByType = doctors.filter(
    (data) => data.speciality.toLowerCase() === decodeURIComponent(slug).toLowerCase()
  );

  console.log(doctorsByType);

  return (
    <section className="p-4">
      <CardDoctors doctors={doctorsByType} />
    </section>
  );
};

export default Page;
