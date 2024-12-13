import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ProfileData {
  name: string;
  image: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  gender: string;
  dateOfBirth: string;
}

export default function Profile({ data }: { data: ProfileData }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={data.image} alt={data.name} />
            <AvatarFallback>
              {data.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-semibold">{data.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProfileField label="Email" value={data.email} />
          <ProfileField label="Phone" value={data.phone} />
          <ProfileField label="Address Line 1" value={data.addressLine1} />
          <ProfileField label="Address Line 2" value={data.addressLine2} />
          <ProfileField label="Gender" value={data.gender} />
          <ProfileField label="Date of Birth" value={data.dateOfBirth} />
        </div>
      </CardContent>
    </Card>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <Label className="text-sm font-medium text-gray-500">{label}</Label>
      <p className="text-base font-semibold">{value}</p>
    </div>
  );
}
