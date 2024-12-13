"use client";

import { useState } from "react";
import { User, Calendar, LogOut } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function UserMenuDropdown() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative size-8 rounded-full border">
          <Avatar className="size-8 font-semibold">
            <AvatarImage src="/avatars/01.png" alt="@username" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 " align="end" forceMount>
        <div className="grid gap-4">
          <div className="font-medium">@lucmanm</div>
          <div className="grid gap-2 *:p-0">
            <Button
              variant="ghost"
              className="flex w-full justify-start gap-2 "
              onClick={() => {
                router.push("/profile");
                setIsOpen((prev) => !prev);
              }}
            >
              <User className="h-4 w-4" />
              Profile
            </Button>
            <Button
              variant="ghost"
              className="flex w-full justify-start gap-2"
              onClick={() => {
                router.push("/appointment");
                setIsOpen((prev) => !prev);
              }}
            >
              <Calendar className="h-4 w-4" />
              Appointments
            </Button>
            <Button
              variant="ghost"
              className="flex w-full justify-start gap-2 text-red-600 hover:text-red-600 hover:bg-red-100"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
