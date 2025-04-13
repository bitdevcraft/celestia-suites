import {
  BedDouble,
  Bath,
  Tv,
  UtensilsCrossed,
  Wifi,
  Thermometer,
  WavesLadder,
  Dumbbell,
  Eye,
} from "lucide-react";

const features = [
  {
    title: "Floor-to-ceiling views",
    description: "Stunning river and cityscape views",
    icon: Eye,
  },
  {
    title: "King-sized bed",
    description: "High-thread-count linens for comfort",
    icon: BedDouble,
  },
  {
    title: "Private bath",
    description: "Rain-style shower and fresh towels",
    icon: Bath,
  },
  {
    title: "Smart TV",
    description: "Access to Netflix and YouTube",
    icon: Tv,
  },
  {
    title: "Fully equipped kitchen",
    description: "Stove, microwave, fridge, cookware",
    icon: UtensilsCrossed,
  },
  {
    title: "High-speed Wi-Fi",
    description: "Suitable for work or streaming",
    icon: Wifi,
  },
  {
    title: "Temperature control",
    description: "Air conditioning for your comfort",
    icon: Thermometer,
  },
  {
    title: "Outdoor Pool",
    description: "Relax and unwind beside a serene open-air pool",
    icon: WavesLadder,
  },
  {
    title: "Gym Access",
    description: "Stay active anytime",
    icon: Dumbbell,
  },
];

export default function FeaturesAndAmenities() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-48 min-h-[50vh]">
      <h2 className="text-3xl md:text-5xl font-crimson-text text-center">
        Features &amp; Amenities
      </h2>
      <p className="text-center w-full md:w-[70%] mx-auto mt-4 font-light">
        Every element of your stay has been curated for ease, comfort, and quiet
        indulgence
      </p>
      <div className="mt-16 grid grid-cols-12 gap-4">
        {features.map((el, i) => {
          const Icon = el.icon;

          return (
            <div
              key={i}
              className="col-span-6 md:col-span-6 lg:col-span-4 text-center border p-2 py-4 md:p-5"
            >
              <Icon
                strokeWidth={1.5}
                className="w-6 h-6 text-primary mt-1 mx-auto"
                color="var(--gold-accent)"
              />
              <p className="font-crimson-text text-lg md:text-xl mt-4">
                {el.title}
              </p>
              <p className="font-light mt-2">{el.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
