import BookWithUs from "@/components/home/book-with-us";
import FaQs from "@/components/home/faqs";
import FeaturesAndAmenities from "@/components/home/features-and-amenities";
import YouAndPet from "@/components/home/for-you-and-your-pet";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import HouseGuideRules from "@/components/home/house-guide-rules";
import NearbyAndNotable from "@/components/home/nearby-and-notable";
import YourExperience from "@/components/home/your-experience";

export default function Home() {
  return (
    <div className="font-josefin-sans relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>
      <div className="relative z-10">
        <Hero />
        <YourExperience />
        <YouAndPet />
        <FeaturesAndAmenities />
        <HouseGuideRules />
        <FaQs />
        <NearbyAndNotable />
        <Gallery />
        <BookWithUs />
      </div>
    </div>
  );
}
