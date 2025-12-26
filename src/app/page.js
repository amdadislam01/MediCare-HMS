import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import MedicalDepartments from '@/components/MedicalDepartments/MedicalDepartments';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Services />
      <MedicalDepartments />
    </div>
  );
}
