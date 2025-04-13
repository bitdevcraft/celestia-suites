import { Square } from "lucide-react";

const rules = [
  {
    title: "Arrival & Departure",
    details: ["Check-in: 2:00 PM", "Check-out: 12:00 PM"],
  },
  {
    title: "House Etiquette",
    details: [
      "No smoking indoors",
      "Pets welcome with prior notice",
      "Kindly avoid parties or large gatherings",
      "Be mindful of your noises",
    ],
  },
  {
    title: "Pet Guidelines",
    details: [
      "Max 2 pets per stay",
      "Please clean up after your pets",
      "Do not leave pets unattended for long periods",
      "Pet-friendly furniture, but please use blankets for the bed",
    ],
  },
  {
    title: "Safety & Cleanliness",
    details: [
      "Secure, keycard-only building entry",
      "Fire extinguisher, smoke detector, and first aid kit provided",
      "Report damages or issues promptly",
    ],
  },
];

export default function HouseGuideRules() {
  return (
    <div className="max-w-7xl mx-auto my-24 md:my-48 px-4">
      <h2 className="text-3xl md:text-5xl font-crimson-text text-center">
        House Guide & Guest Notes
      </h2>
      <p className="text-center w-full md:w-[70%] mx-auto mt-4 font-light">
        Everything you need to know for a seamless stay
      </p>
      <div className="mt-16 grid grid-cols-2 gap-8">
        {rules.map((el, i) => (
          <div key={i} className="col-span-2 sm:col-span-1 px-5 py-8 border">
            <div className="font-crimson-text text-lg md:text-2xl flex gap-3">
              <p className="text-gold">{(i + 1).toString().padStart(2, "0")}</p>
              <p>{el.title}</p>
            </div>
            <ul className="font-light flex flex-col gap-3 mt-3 text-md md:text-lg pl-4">
              {el.details.map((det, i) => (
                <li key={i} className="flex items-center gap-4">
                  <Square
                    size={12}
                    className="text-gold"
                    fill="var(--gold-accent)"
                  />
                  <p className="flex-1">{det}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
