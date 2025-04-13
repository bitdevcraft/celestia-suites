import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questiosAndAnswer = [
  {
    question: "Can I bring my pet?",
    answer:
      "Absolutely. We welcome cats and small-to-medium dogs. Our pet policy ensures a peaceful stay for all.",
  },
  {
    question: "Is there an additional fee for bringing a pet?",
    answer: "Yes, there is a Pet Fee of Php 1000 nett per stay. Up to 2 pets",
  },
  {
    question: "Does the view really match the photos?",
    answer:
      "Without a doubt. You'll see uninterrupted vistas of both the river and skyline from your room.",
  },
  {
    question: "Is early check-in or late check-out possible?",
    answer:
      "We're happy to offer it when available—just message us ahead of time.",
  },
  {
    question: "How secure is the property?",
    answer:
      "Very. Guests access the building via keycard, and the premises are monitored 24/7.",
  },
  {
    question: "How secure is the property?",
    answer:
      "Very. Guests access the building via keycard, and the premises are monitored 24/7.",
  },
  {
    question: "Is cleaning included in the stay?",
    answer:
      "Daily cleaning is not included and may incur an additional fee. However, for stays longer than 3 nights, you can request a complimentary mid-stay cleaning.",
  },
  {
    question: "Can I park there?",
    answer:
      "There is no on-site parking. Public parking is available at a location nearby (reservation is not needed)",
  },
];

export default function FaQs() {
  return (
    <div className="max-w-3xl mx-auto px-4 my-48 min-h-[50vh]">
      <h2 className="text-3xl md:text-5xl font-crimson-text text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-center w-full md:w-[70%] mx-auto mt-4 font-light">
        Everything you need to know about your stay with us
      </p>
      <div className="flex flex-col gap-4 mt-16">
        {questiosAndAnswer.map((el, i) => (
          <Accordion key={i} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-crimson-text">
                {el.question}
              </AccordionTrigger>
              <AccordionContent className="font-light bg-gray-100/30 p-2">
                {el.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
