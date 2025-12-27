import {
  FaBriefcaseMedical,
  FaBrain,
  FaHeart,
  FaMicroscope,
  FaEye,
  FaTooth,
  FaUserMd,
  FaNotesMedical,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Pharmacology",
      icon: <FaBriefcaseMedical />,
      tips: "Advancing drug research and development for better treatments",
    },
    {
      id: 2,
      name: "Orthopedic",
      icon: <FaMicroscope />,
      tips: "Expert care for bone, joint, and muscle health",
    },
    {
      id: 3,
      name: "Hematology",
      icon: <FaHeart />,
      tips: "Comprehensive blood disorder diagnosis and treatment",
    },
    {
      id: 4,
      name: "Plastic Surgery",
      icon: <FaUserMd />,
      tips: "Enhancing aesthetics and reconstructive care",
    },
    {
      id: 5,
      name: "Neurology",
      icon: <FaBrain />,
      tips: "Cutting-edge solutions for brain and nervous system disorders",
    },
    {
      id: 6,
      name: "Ophthalmology",
      icon: <FaEye />,
      tips: "Innovative eye care for vision health",
    },
    {
      id: 7,
      name: "Dental Care",
      icon: <FaTooth />,
      tips: "Ensuring bright smiles with top-notch dental treatments",
    },
    {
      id: 8,
      name: "Cardiology",
      icon: <FaNotesMedical />,
      tips: "Heart health solutions from diagnosis to treatment",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-2">
      <div>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            OUR{" "}
            <span className="text-blue underline decoration-blue-600">
              HIGH QUALITY
            </span>{" "}
            SERVICES
          </h2>
          <p className="text-secondary max-w-3xl mx-auto text-lg">
            We are privileged to work with hundreds of future-thinking medical
            industries, ensuring the best services for patients.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-6 rounded-xl shadow-md bg-main group overflow-hidden cursor-pointer transition"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-500 z-0"
                style={{ backgroundImage: "url('/services.jpg')" }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0E82FD] opacity-0 group-hover:opacity-70 transition duration-500 z-10"></div>

              {/* Content */}
              <div className="relative z-20">
                <div className="text-3xl text-blue-600 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mt-4 text-[#3c3c3c] group-hover:text-white transition-colors duration-500">
                  {service.name}
                </h3>

                <p className="text-sm mt-2 font-semibold text-[#3c3c3c] group-hover:text-white transition-colors duration-500">
                  {service.tips}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
