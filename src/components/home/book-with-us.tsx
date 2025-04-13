import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function BookWithUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-32">
      <h2 className="text-3xl md:text-5xl font-crimson-text text-center">
        Ready to Book Your Stay?
      </h2>
      <p className="text-center w-full md:w-[70%] mx-auto mt-4 font-light">
        Experience the perfect blend of luxury, comfort, and pet-friendly
        hospitality
      </p>
      <div className="flex flex-col md:flex-row md:flex-row-reverse items-center gap-4">
        <div className="flex flex-col gap-4 mt-16 items-center flex-1 w-full">
          <p className="font-crimson-text text-xl">Book with Us</p>
          <Link
            href={
              "https://www.booking.com/hotel/ph/celestia-suites-by-novotel.html"
            }
            target="_blank"
            className="py-6 max-w-96 flex justify-center items-center hover:text-gold w-full border bg-white text-gray-700 rounded-none font-light text-lg"
          >
            Booking.com
          </Link>
          <Link
            href={
              "https://www.agoda.com/novotel-suites-manila-by-celestia/hotel/tejeros-ph.html"
            }
            target="_blank"
            className="py-6 max-w-96 flex justify-center items-center hover:text-gold w-full border bg-white text-gray-700 rounded-none font-light text-lg"
          >
            Agoda.com
          </Link>
          <Link
            href={"https://www.airbnb.ae/rooms/1344252283704015513"}
            target="_blank"
            className="py-6 max-w-96 flex justify-center items-center hover:text-gold w-full border bg-white text-gray-700 rounded-none font-light text-lg flex"
          >
            Airbnb.com
          </Link>
        </div>
        <div className="text-center mt-16 flex-1 w-full">
          <p className="font-crimson-text text-xl">Questions before booking?</p>
          <p className="font-light mt-6">
            We&apos;re happy to help you feel confident and informed before you
            reserve your stay.
          </p>
          <p className="font-light">
            If you have any questions or special requests, feel free to reach
            out:
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8 text-center">
            <Link
              href={"https://facebook.com/celestia.suites"}
              target="_blank"
              className="col-span-2 md:col-span-1 flex gap-3 border p-4 justify-center items-center"
            >
              <p>
                Message us on{" "}
                <span className="text-[#1877F2] font-bold">Facebook</span>
              </p>
              <MoveRight strokeWidth={1} />
            </Link>
            <Link
              href={"https://wa.me/639989954214"}
              target="_blank"
              className="col-span-2 md:col-span-1 flex gap-3 border p-4 justify-center items-center"
            >
              <p>
                Chat with us on{" "}
                <span className="text-[#25D366] font-bold">WhatsApp</span>
              </p>
              <MoveRight strokeWidth={1} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
