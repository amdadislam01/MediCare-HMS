import Image from "next/image";
import Link from "next/link";

const healthConcerns = [
  {
    title: "Diabetes",
    src: "https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg",
    alt: "Person checking blood sugar with glucose meter",
    desc: "Chronic condition where the body can't properly regulate blood sugar levels, leading to serious health complications if untreated.",
  },
  {
    title: "Hypertension",
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1200&auto=format&fit=crop",
    alt: "Blood pressure measurement device",
    desc: "Persistently high blood pressure that damages blood vessels and increases risk of heart disease and stroke.",
  },
  {
    title: "Anxiety Disorders",
    src: "https://images.pexels.com/photos/8458974/pexels-photo-8458974.jpeg",
    alt: "Person experiencing anxiety and stress",
    desc: "Mental health conditions causing excessive worry, fear, and nervousness that disrupt daily life and well-being.",
  },
  {
    title: "Asthma",
    src: "https://images.pexels.com/photos/30428329/pexels-photo-30428329.jpeg",
    alt: "Asthma inhaler on table",
    desc: "Respiratory condition where airways become inflamed and narrow, causing breathing difficulties and recurring symptoms.",
  },
  {
    title: "Arthritis",
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    alt: "Elderly person holding painful joints",
    desc: "Joint inflammation causing pain, stiffness, and reduced mobility that progressively worsens over time.",
  },
  {
    title: "Obesity",
    src: "https://images.pexels.com/photos/11309666/pexels-photo-11309666.jpeg",
    alt: "Measuring waist size and weight management",
    desc: "Excess body weight accumulation that significantly increases risk of heart disease, diabetes, and other health problems.",
  },
];

export default function CommonHealthConcerns() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
          Common{" "}
          <span className="text-blue-600 underline underline-offset-4">
            Health
          </span>{" "}
          Concerns
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg md:text-xl">
          Understanding common health issues helps in early detection and
          prevention. Consult our specialists if you experience any of these
          symptoms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {healthConcerns.map((concern, i) => (
          <div
            key={i}
            className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <Image
                src={concern.src}
                alt={concern.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xl sm:text-2xl font-bold">
                  {concern.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {concern.desc}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:underline"
              >
                Learn More
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 md:mt-16">
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          Experiencing any of these symptoms? Don&apos;t wait for them to worsen.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
}
