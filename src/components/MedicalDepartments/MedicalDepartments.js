import { MoveRight } from "lucide-react";
import Image from "next/image";

const departments = [
  {
    title: "Cardiology",
    src: "https://t3.ftcdn.net/jpg/02/33/75/52/360_F_233755218_MyiwNDELehYutwyE1RRIro8ysHO4z6PB.jpg",
    alt: "Modern cardiology department with advanced heart monitoring equipment",
    desc: "Advanced diagnostics and treatment for heart conditions using cutting-edge cardiac technology.",
  },
  {
    title: "Neurology",
    src: "https://media.gettyimages.com/id/1649025326/photo/neurology-staff-at-hospital-discuss-patient-brain-scans.jpg?s=612x612&w=0&k=20&c=ZJJ1EI6nY8SU4rLiz6X2mhIfP_tb3uyG61whKohs_sw=",
    alt: "Modern neurology department MRI scan room",
    desc: "Expert care for brain, spine, and nervous system disorders with advanced imaging and treatments.",
  },
  {
    title: "Emergency Medicine",
    src: "https://uph-p-001-delivery.sitecorecontenthub.cloud/api/public/content/97a42756a6a047f3871238ce6d380dfb?v=f53c89e2&t=1440xnull",
    alt: "Modern emergency department trauma care team in action",
    desc: "24/7 emergency care for critical injuries and urgent medical conditions.",
  },
  {
    title: "Oncology",
    src: "https://cdn.create.vista.com/api/media/small/157232422/stock-photo-medical-doctor-using-tablet-pc-with-oncology-medical-concept",
    alt: "Modern oncology infusion and chemotherapy treatment room",
    desc: "Comprehensive cancer care including chemotherapy, radiation, and supportive therapies.",
  },
  {
    title: "Dermatology",
    src: "https://skinandcancercenterofarizona.com/wp-content/uploads/2025/05/Dermatologist-1000x667.jpg",
    alt: "Dermatologist performing professional skin examination",
    desc: "Expert diagnosis and treatment for skin, hair, and nail disorders.",
  },
  {
    title: "General Surgery",
    src: "https://kimballhealth.org/wp-content/uploads/2025/03/039_KimballHospital_OR-1-1.jpg",
    alt: "Modern general surgery operating room with advanced equipment",
    desc: "Advanced surgical procedures with minimally invasive techniques.",
  },
];

export default function MedicalDepartments() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
          Our{" "}
          <span className="text-blue-600 underline underline-offset-4">
            Medical
          </span>{" "}
          Departments
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg md:text-xl">
          Delivering advanced, specialized care across a wide range of medical
          fields with compassion and expertise.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {departments.map((dept, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
              <Image
                src={dept.src}
                alt={dept.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <h3 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xl sm:text-2xl font-bold">
                  {dept.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {dept.desc}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:underline"
              >
                Read More <MoveRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
