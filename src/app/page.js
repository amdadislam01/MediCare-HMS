import AboutUs from "@/components/AboutUs/AboutUs";
import Blog from "@/components/Blog/Blog";
import DoctorSpecialists from "@/components/DoctorSpecialist/DoctorSpecialists";
import CommonHealthConcerns from "@/components/HealthConcerns/CommonHealthConcerns";
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
      <DoctorSpecialists/>
      <WhyChooseUs />
      <Specialties />
      <Blog />
      <CommonHealthConcerns></CommonHealthConcerns>
    </div>
  );
}
