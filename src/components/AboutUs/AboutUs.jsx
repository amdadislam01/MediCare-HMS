import { FaCheckDouble } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
      {/* Left Side: Text */}
      <div>
        <h4 className="text-blue font-bold uppercase">
          About MediCare
        </h4>
        <h2 className="text-2xl md:text-4xl  text-primary mt-2 tracking-wide">
          We Provide{" "}
          <span className="text-blue font-bold tracking-wider underline underline-offset-4">
            Exceptional
          </span>{" "}
          Patient&apos;s
          <br /> <span className="font-bold">Care & Amenities</span>
        </h2>
        <p className="text-secondary mt-4">
          Embrace a world of comprehensive healthcare where your well-being
          takes center stage. At Meca, were dedicated to providing you with
          personalized and compassionate medical services.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 text-primary">
          <p className="flex items-center gap-2 font-semibold">
            <FaCheckDouble className="text-blue" /> Seamless Care
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <FaCheckDouble className="text-blue" /> Patient-Centered Care
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <FaCheckDouble className="text-blue" /> Warm and Welcoming
            Environment
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <FaCheckDouble className="text-blue" /> Personalized Approach
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <FaCheckDouble className="text-blue" /> Comprehensive Care
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <FaCheckDouble className="text-blue" /> Cutting-Edge Technology
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <FaCheckDouble className="text-blue" /> Expert Doctors
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <FaCheckDouble className="text-blue" /> Positive Reviews
          </p>
        </div>

        <Link href="/about-us">
          <button className="bg-primary px-4 py-2 mt-4 text-white font-bold rounded-md">➜ More About Us</button>
        </Link>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full">
  <div className="relative w-full aspect-[6/4]">
    <Image
      src="/about.png"
      alt="happy patient"
      fill
      className="rounded-lg shadow-lg object-cover"
    />

    <div className="absolute inset-0">
      {/* Top right section */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-purple-100/20 p-2 sm:p-4 rounded-lg shadow-md backdrop-blur-md border border-white/30">
        <div className="border-2 rounded-lg border-white/40 p-2 sm:p-4 bg-white/10 backdrop-blur-sm">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            22+
          </p>
          <p className="text-gray-900 text-xs sm:text-sm font-medium">
            Different <br /> Sections
          </p>
        </div>
      </div>

      {/* Bottom left section */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-green-100/20 p-2 sm:p-4 rounded-lg shadow-md backdrop-blur-md border border-white/30">
        <div className="border-2 rounded-lg border-white/40 p-2 sm:p-4 bg-white/10 backdrop-blur-sm">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            5K+
          </p>
          <p className="text-gray-900 text-xs sm:text-sm font-medium">
            Patient&apos;s <br /> Reviews
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
