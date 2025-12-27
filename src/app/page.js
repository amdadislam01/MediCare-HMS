import AboutUs from "@/components/AboutUs/AboutUs";
import Blog from "@/components/Blog/Blog";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import MedicalDepartments from "@/components/MedicalDepartments/MedicalDepartments";
import Services from "@/components/Services/Services";
import Specialties from "@/components/Specialties/Specialties";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <MedicalDepartments />
      <Services />
      <WhyChooseUs />
      <Specialties />
      <Blog />
    </div>
  );
}
