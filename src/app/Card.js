import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Pharmacy",
    desc: "24/7 access to vital medications and expert pharmaceutical advice.",
    img: "/pharmacy.jpg",
    iconBg: "bg-blue-100",
  },
  {
    title: "Emergency",
    desc: "Rapid response trauma care with state-of-the-art life support systems.",
    img: "/emergency.jpg",
    iconBg: "bg-red-100",
  },
  {
    title: "Specialized Surgery",
    desc: "World-class operation theaters and specialized surgeons for critical procedures.",
    img: "/surgery.jpg",
    iconBg: "bg-green-100",
  },
  {
    title: "Diagnostics",
    desc: "Advanced imaging and laboratory services for precise and quick diagnosis.",
    img: "/diagnostics.jpg",
    iconBg: "bg-purple-100",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative h-44 w-full">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div
                className={`w-10 h-10 rounded-lg ${s.iconBg} flex items-center justify-center mb-4`}
              >
                <span className="text-xl">+</span>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {s.desc}
              </p>

              <button className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
