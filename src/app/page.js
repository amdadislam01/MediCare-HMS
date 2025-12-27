
import WhyChooseUs from "@/components/Choose/WhyChooseUs";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import MedicalDepartments from "@/components/MedicalDepartments/MedicalDepartments";
import Services from "@/components/Services/Servieces";






export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <MedicalDepartments />
    </div>
  );
}
