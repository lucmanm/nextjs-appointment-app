import Image from "next/image";
import Link from "next/link";
import React from "react";

export const IconHeader = () => {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <Image
        src="https://res.cloudinary.com/dzdcszrob/image/upload/v1733784642/icons/prgwxxiyf4w0jrme59mv.jpg"
        alt="Logo"
        width={28}
        height={28}
        className="rounded-sm overflow-hidden border shadow"
      />
      <span className="text-base ">Lucmanm</span>
    </Link>
  );
};
