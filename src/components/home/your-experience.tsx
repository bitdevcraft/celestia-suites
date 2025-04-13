import Image from "next/image";

export default function YourExperience() {
  return (
    <div className="min-h-[50vh] max-w-7xl mx-auto px-4 my-16 md:my-32">
      <div className="md:flex md:justify-center md:items-center gap-12">
        <div className="md:basis-1/2 md:flex-1 flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-crimson-text">
            Your Experience
          </h2>
          <p className="font-light">
            Step into a private, peaceful space that feels a world away from the
            city—yet places you right at its heart. Perched above the river,
            this elegant Deluxe King Suite unit is crafted for guests who
            appreciate calm, beauty, and thoughtful touches at every turn.
          </p>
          <p className="font-light">
            Ideal for solo travelers, couples, digital explorers, and those who
            never travel without their pets.
          </p>
        </div>
        <div className="mt-4 md:mt-0 md:basis-1/2 md:flex-1 bg-gray-100 h-96 md:h-128 w-full overflow-hidden relative object-cover">
          <Image
            src={"/room.jpg"}
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
