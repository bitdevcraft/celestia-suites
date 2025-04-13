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
    <div className="mt-16 md:mt-24">
      <div className="py-8 flex justify-center bg-gray-100">
        <div className="max-w-7xl px-4 mx-auto  flex flex-col md:flex-row justify-between items-center w-full ">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
              Connect With Us
            </h2>
            <p className="font-light text-center md:text-left">
              Follow us on social media to stay updated with our latest news and
              announcements.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 text-gold mt-4 md:mt-0">
            {socials.map((el, i) => {
              const Icon = el.icon;
              return (
                <Link
                  href={el.url}
                  key={i}
                  className="p-1 md:opacity-50 hover:opacity-100"
                >
                  <Icon
                    strokeWidth={0.5}
                    className="size-6 text-primary mt-1 mx-auto"
                    color={el.color}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-4 mx-auto py-8 text-center">
        © Celestia Suites 2025.
      </div>
    </div>
  );
}
