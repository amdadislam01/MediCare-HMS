import { FaCheckDouble } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            About MediCare
          </h4>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mt-3 leading-tight">
            We Provide{" "}
            <span className="text-blue-600 font-bold underline underline-offset-4">
              Exceptional
            </span>{" "}
            Patient&apos;s
            <br />
            <span className="font-bold">Care & Amenities</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-xl text-base sm:text-lg">
            Embrace a world of comprehensive healthcare where your well-being
            takes center stage. We are dedicated to delivering personalized,
            compassionate, and modern medical services.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              "Seamless Care",
              "Patient-Centered Care",
              "Warm & Welcoming Environment",
              "Personalized Approach",
              "Comprehensive Care",
              "Cutting-Edge Technology",
              "Expert Doctors",
              "Positive Reviews",
            ].map((item, idx) => (
              <p
                key={idx}
                className="flex items-start gap-3 text-gray-800 font-medium"
              >
                <FaCheckDouble className="text-blue-600 mt-1" />
                {item}
              </p>
            ))}
          </div>

          {/* CTA */}
          <Link href="/about-us">
            <button className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 text-white font-semibold rounded-md shadow-md">
              More About Us →
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/about.png"
              alt="Happy patient"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay Stats */}
            <div className="absolute inset-0 pointer-events-none">
              
              {/* Top Right */}
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  22+
                </p>
                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                  Medical <br /> Departments
                </p>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  5K+
                </p>
                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                  Patient <br /> Reviews
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
