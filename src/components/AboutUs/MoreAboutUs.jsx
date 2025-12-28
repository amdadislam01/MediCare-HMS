import Image from "next/image";


const MoreAboutUs = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <Image
              src="/about-hospital.png"
              alt="Hospital"
              width={800}
              height={500}
              className="w-full object-cover rounded-xl shadow-lg"
            />

            <Image
              src="/about-hospital-1.png"
              alt="Hospital bed"
              width={160}
              height={160}
              className="absolute bottom-4 left-4 w-20 h-20 sm:w-40 sm:h-40 object-cover rounded-lg shadow-lg border-2 border-white"
            />

            <Image
              src="/about-hospital-2.png"
              alt="Hospital operation theater"
              width={160}
              height={160}
              className="absolute top-4 right-4 w-20 h-20 sm:w-40 sm:h-40 object-cover rounded-lg shadow-lg border-2 border-white"
            />
          </div>

          {/* Right Side - Text */}
          <div>
            <h4 className="text-blue font-semibold text-sm uppercase tracking-wider">
              More About Us
            </h4>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-1">
              We Are A Clinic,{" "}
              <span className="text-blue">Provide Excellence</span> In
              Personalized Care
            </h2>

            <p className="text-gray-600 mt-6">
              We are a private, independent practice constantly striving to
              provide excellence in personalized, compassionate care that is
              consistent, quality-driven and choice-conscious for all of our
              patients.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Doctor Image */}
              <Image
                src="/doctor.png"
                alt="Doctor"
                width={112}
                height={112}
                className="w-28 h-28 rounded-xl object-cover shadow-lg"
              />

              {/* Right-side text */}
              <div>
                <p className="text-secondary">
                  We welcome advances in learning and technology in an effort to
                  achieve efficient and quality-driven patient care.
                </p>
                <p className="mt-4 text-secondary">
                  Together, our team of doctors bring a broad spectrum of
                  experience and continually undertake professional development
                  to stay updated on the latest in medical treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutUs;
