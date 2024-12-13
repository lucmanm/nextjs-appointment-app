import CardDoctors from "@/components/card-doctors";
import { Card } from "@/components/ui/card";
import { doctors } from "@/constant/assets";

const Page = async ({ params }: { params: Promise<{ doctorType: string }> }) => {
  const slug = (await params).doctorType;

  const doctorsByType = doctors.filter(
    (data) => data.speciality.toLowerCase() === decodeURIComponent(slug).toLowerCase()
  );

  return doctorsByType.length > 0 ? (
    <CardDoctors doctors={doctorsByType} />
  ) : (
    <Card className="w-full font-semibold px-4 py-2">No Doctor Available</Card>
  );
};

export default Page;
