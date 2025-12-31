import HeroSection from "@/components/HeroSection";
import PersonalitySection from "@/components/PersonalitySection";
import InterestsSection from "@/components/InterestsSection";
import PetSection from "@/components/PetSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PersonalitySection />
      <InterestsSection />
      <PetSection />
      <Footer />
    </main>
  );
};

export default Index;
