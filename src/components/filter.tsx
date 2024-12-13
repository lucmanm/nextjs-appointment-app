import React from "react";
import { Button } from "./ui/button";
import { FilterIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Filter = ({ className }: { className?: string }) => {
  return (
    <Button className={cn("border shadow-sm rounded-full font-semibold w-28", className)} variant="ghost" size="sm">
      <FilterIcon />
      <span>Filter</span>
    </Button>
  );
};
