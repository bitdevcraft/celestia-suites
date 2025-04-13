import Image from "next/image";

export default function YourExperience() {
  return (
    <div className="min-h-[50vh] max-w-7xl mx-auto px-4 my-32">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 min-h-[60vh]">
        <div className="basis-1/2 flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-crimson-text ">
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
        <div className="basis-1/2 flex-1 bg-gray-100 h-128 w-full overflow-hidden relative">
          <Image
            src={"/room.jpg"}
            alt="room"
            width={500}
            height={500}
            className="w-full absolute top-1/2 -translate-y-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
