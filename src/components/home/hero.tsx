import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[url(/cover-page-mobile.jpg)] md:bg-[url(/cover-page.jpg)] bg-cover bg-position-[35%] md:bg-position-[35%] lg:bg-left relative">
      <div className="h-full w-full bg-gradient-to-t from-black via-transparent via-[60%] to-black/50 min-h-screen text-white">
        <div className="max-w-7xl px-4 mx-auto flex flex-col lg:flex-row justify-between gap-4 items-end md:items-center justify-center w-full min-h-screen">
          <div className="basis-1/3 flex-1"></div>
          <div className="basis-2/3 flex flex-col justify-center items-center sm:items-end flex-1 gap-6">
            <h1 className="text-center sm:text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-crimson-text">
              River &amp; City View
              <br /> Retreat
            </h1>
            <p className="text-gray-100 font-light text-center sm:text-right text-josefin-sans text-sm sm:text-base md:text-xl w-full md:w-[80%]">
              An elevated stay with stunning skyline and river views. Impeccably
              designed, thoughtfully appointed, and warmly welcoming to both
              guests and their beloved pets.
            </p>
          </div>
        </div>
        <ChevronDown
          color="white"
          className="absolute bottom-0 left-1/2 -translate-x-[50%] my-16 animate-bounce scale-200"
        />
      </div>
    </div>
  );
}
