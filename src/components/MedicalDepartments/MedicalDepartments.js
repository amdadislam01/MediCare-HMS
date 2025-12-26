import { MoveRight } from 'lucide-react';
import Image from 'next/image';

const departments = [
  {
    title: "Cardiology",
    src: "https://t3.ftcdn.net/jpg/02/33/75/52/360_F_233755218_MyiwNDELehYutwyE1RRIro8ysHO4z6PB.jpg",
    alt: "Modern cardiology department with advanced heart monitoring equipment",
    desc: "Advanced diagnostics and treatment for heart conditions using cutting-edge cardiac technology."
  },
  {
    title: "Neurology",
    src: "https://media.gettyimages.com/id/1649025326/photo/neurology-staff-at-hospital-discuss-patient-brain-scans.jpg?s=612x612&w=0&k=20&c=ZJJ1EI6nY8SU4rLiz6X2mhIfP_tb3uyG61whKohs_sw=",
    alt: "Modern neurology department MRI scan room",
    desc: "Expert care for brain, spine, and nervous system disorders with advanced imaging and treatments."
  },
  {
    title: "Emergency Medicine",
    src: "https://uph-p-001-delivery.sitecorecontenthub.cloud/api/public/content/97a42756a6a047f3871238ce6d380dfb?v=f53c89e2&t=1440xnull",
    alt: "Modern emergency department trauma care team in action",
    desc: "24/7 emergency care for critical injuries and urgent medical conditions."
  },
  {
    title: "Oncology",
    src: "https://cdn.create.vista.com/api/media/small/157232422/stock-photo-medical-doctor-using-tablet-pc-with-oncology-medical-concept",
    alt: "Modern oncology infusion and chemotherapy treatment room",
    desc: "Comprehensive cancer care including chemotherapy, radiation, and supportive therapies."
  },
  {
    title: "Dermatology",
    src: "https://skinandcancercenterofarizona.com/wp-content/uploads/2025/05/Dermatologist-1000x667.jpg",
    alt: "Dermatologist performing professional skin examination",
    desc: "Expert diagnosis and treatment for skin, hair, and nail disorders."
  },
  {
    title: "General Surgery",
    src: "https://kimballhealth.org/wp-content/uploads/2025/03/039_KimballHospital_OR-1-1.jpg",
    alt: "Modern general surgery operating room with advanced equipment",
    desc: "Advanced surgical procedures with minimally invasive techniques."
  },
];

export default function MedicalDepartments() {
  return (
    <section className="bg-main py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-wider">
          OUR <span className='text-blue underline'>MEDICAL</span> DEPARTMENTS
        </h2>
        <p className="text-lg md:text-xl text-secondary max-w-4xl mx-auto">
          Delivering Advanced, Specialized Care Across a Wide Range of Medical Fields. Compassionate Experts Dedicated to Your Health and Well-Being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {departments.map((dept, i) => (
          <div
            key={i}
            className="bg-main rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group cursor-pointer"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={dept.src}
                alt={dept.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-600 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold tracking-wide">
                    {dept.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8 pt-6">
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                {dept.desc.slice(0, 80)}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue font-semibold text-lg transition-colors hover:underline"
              >
                Read More <span className="text-xl"> <MoveRight size={22} /></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}