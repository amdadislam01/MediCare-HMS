import AboutUs from "@/components/AboutUs/AboutUs";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import MedicalDepartments from "@/components/MedicalDepartments/MedicalDepartments";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <MedicalDepartments />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
