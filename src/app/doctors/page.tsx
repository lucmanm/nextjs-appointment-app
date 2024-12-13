import CardDoctors from "@/components/card-doctors";
import { doctors } from "@/constant/assets";

const Page = () => {
  return <CardDoctors doctors={doctors} />;
};

export default Page;
