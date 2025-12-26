import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <MedicalDepartments />
    </div>
  );
}
