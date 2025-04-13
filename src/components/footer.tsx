/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { SiFacebook, SiTiktok, SiInstagram } from "react-icons/si";
const socials = [
  {
    title: "Facebook",
    url: "https://facebook.com/celestia.suites",
    icon: SiFacebook,
    color: "#0866FF",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/celestia.suites",
    icon: SiInstagram,
    color: "#FF0069",
  },
  {
    title: "Tiktok",
    url: "https://tiktok.com/@celestia.suites",
    icon: SiTiktok,
    color: "#000000",
  },
];

export default function Footer() {
  return (
    <div className="max-w-7xl px-4  mx-auto">
      <div className="py-8 flex justify-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-crimson-text text-center">
            Follow Us
          </h2>
          <div className="flex justify-center items-center gap-4 text-gold mt-8">
            {socials.map((el, i) => {
              const Icon = el.icon;
              return (
                <Link href={el.url} key={i} className="p-1">
                  <Icon
                    strokeWidth={0.5}
                    className="size-12 text-primary mt-1 mx-auto"
                    color={el.color}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t py-8 text-center mt-16">
        © Celestia Suites 2025. Bookings processed through Booking.com for your
        convenience.
      </div>
    </div>
  );
}
