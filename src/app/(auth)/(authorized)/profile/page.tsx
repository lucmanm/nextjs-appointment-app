import Profile from "./_profile";

export default function ProfilePage() {
  // This is mock data. In a real application, you'd fetch this from an API or database
  const profileData = {
    name: "Jane Doe",
    image: "/placeholder.svg?height=128&width=128",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B, Cityville, ST 12345",
    gender: "Female",
    dateOfBirth: "1990-01-15",
  };

  return (
    <div className="container mx-auto py-10">
      <Profile data={profileData} />
    </div>
  );
}
