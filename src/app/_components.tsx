import CardDoctors from "@/components/card-doctors";
import { doctors, specialityData } from "@/constant/assets";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Title = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center space-y-2">
    <h1 className="text-2xl font-semibold">{title}</h1>
    <span className="text-sm">{description}</span>
  </div>
);

export const Speciality = () => (
  <div className="flex flex-col items-center gap-4 lg:my-8">
    {/* Title header */}
    <Title
      title="Top Doctors to Book"
      description="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
    />

    {/* spaciality list */}
    <div className="flex gap-8 text-sm">
      {specialityData.map((data, id) => (
        <div key={id} className="items-center flex flex-col justify-evenly space-y-2">
          <Image src={data.image} alt={data.speciality} height={100} width={100} />
          <span>{data.speciality}</span>
        </div>
      ))}
    </div>
  </div>
);

export const TopDoctors = () => (
  <div className="space-y-2 lg:my-8">
    {/* Title */}
    <Title title="Top Doctors to Book" description="Simply browse through our extensive list of trusted doctors." />
    {/* doctor List */}
    <CardDoctors doctors={doctors} />
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              We&apos;re passionate about sharing knowledge and inspiring our readers. Join us on this journey of
              discovery and learning.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest articles and insights. Subscribe to our newsletter.
            </p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-[200px]" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20">
          <nav className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Articles
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
