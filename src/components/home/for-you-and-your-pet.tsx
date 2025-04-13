import Image from "next/image";

export default function YouAndPet() {
  return (
    <div className="min-h-[50vh] max-w-7xl mx-auto px-4 my-16 md:my-32">
      <div className="md:flex md:flex-row-reverse  md:justify-center md:items-center gap-12 min-h-[60vh]">
        <div className="md:basis-1/2 flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-crimson-text ">
            For You &amp; Your Pet
          </h2>
          <p className="font-light">
            We&apos;ve created a space where pets are not just
            allowed—they&apos;re truly welcome.
          </p>
        </div>
        <div className="mt-4 md:mt-0 md:basis-1/2 md:flex-1 bg-gray-100 h-96 md:h-128 w-full overflow-hidden relative object-cover">
          <Image
            src={"/pet.jpeg"}
            alt="room"
            width={500}
            height={500}
            className="w-full h-full absolute top-1/2 -translate-y-[50%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
