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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-blue-600 underline underline-offset-4">
              High Quality
            </span>{" "}
            Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            We work with future-focused medical departments to ensure world-class
            patient care and advanced healthcare solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Hover Background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-500"
                style={{ backgroundImage: "url('/services.jpg')" }}
              />
              <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl text-blue-600 group-hover:text-white transition mb-4">
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-white transition">
                  {service.name}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mt-2 group-hover:text-white transition">
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
