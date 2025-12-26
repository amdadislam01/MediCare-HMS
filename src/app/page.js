import Image from "next/image";
import {
  ArrowRight,
  Pill,
  Ambulance,
  Stethoscope,
  Microscope,
} from "lucide-react";

const services = [
  {
    title: "Pharmacy",
    desc: "24/7 access to vital medications and expert pharmaceutical advice.",
    img: "https://www.stmaryshealthcaresystem.org/sites/default/files/hg_features/hg_post/5d71fe355817ae2f659bb9bace8b3486.png",
    iconBg: "bg-blue-100",
    icon: Pill,
  },
  {
    title: "Emergency",
    desc: "Rapid response trauma care with state-of-the-art life support systems.",
    img: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=600",
    iconBg: "bg-red-100",
    icon: Ambulance,
  },
  {
    title: "Specialized Surgery",
    desc: "World-class operation theaters and specialized surgeons for critical procedures.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    iconBg: "bg-green-100",
    icon: Stethoscope,
  },
  {
    title: "Diagnostics",
    desc: "Advanced imaging and laboratory services for precise and quick diagnosis.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    iconBg: "bg-purple-100",
    icon: Microscope,
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* 🔹 Section Header */}
      <div className="text-center mb-14">
        <p className="text-teal-500 font-semibold tracking-widest uppercase mb-3">
          Departments
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Care Services
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
          We provide a wide range of medical services to ensure you get the best
          treatment possible under one roof.
        </p>
      </div>

      {/* 🔹 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="group rounded-2xl shadow-lg overflow-hidden bg-white
            transform transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div
                className={`w-10 h-10 rounded-lg ${s.iconBg} flex items-center justify-center mb-4`}
              >
                <s.icon size={18} className="text-gray-800" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {s.desc}
              </p>

              <button className="flex items-center gap-2 font-medium text-sm transition-all hover:gap-3 text-blue-600 hover:underline cursor-pointer hover:font-semibold">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
