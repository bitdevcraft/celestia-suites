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
    <div className="font-josefin-sans">
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
  );
}
