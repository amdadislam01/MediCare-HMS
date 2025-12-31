import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Treating Cold and Cough with a General Physician",
      description:
        "Cold and cough are two of the most common health conditions we encounter throughout the year. General physicians across the country experience a surge in patients seeking relief from these seasonal ailments...",
      image: "https://www.choa.org/-/media/Images/Childrens/global/social-share-images/parent-resources/everyday-illnesses/common-kids-coughs-explained/doctor-listening-to-stethoscope-with-young-boy-1200x630.jpg", 
      date: "29 Apr 2025",
      category: "General Physician",
    },
    {
      id: 2,
      title: "How To Monitor Patients Effectively In A Home ICU",
      description:
        "Thanks to medical and technological advancements, it is possible to set up an ICU at home. However, it is important to know how the setup operates and how to monitor patients effectively...",
      image: "https://i0.wp.com/www.carefirst.me/wp-content/uploads/2024/02/Essential-Equipment-to-Set-Up-an-ICU-at-Home_Carefirst.jpg?fit=1600%2C1200&ssl=1", 
      date: "28 Apr 2025",
      category: "Critical Care",
    },
    {
      id: 3,
      title: "Living Well With Diabetes: Tips For Daily Management",
      description:
        "We all have someone in our immediate or extended families who suffers from diabetes. It is one of the most common chronic health conditions affecting millions worldwide...",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2024/04/close-up-woman-measuring-blood-sugar-levels-with-glucose-monitor-glucometer-1200x628-facebook.jpg",
      date: "28 Apr 2025",
      category: "Endocrinology",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
          BLOGS <span className="bg-primary bg-clip-text text-transparent">& NEWS</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Stay informed with the latest insights, health tips, and updates in healthcare from trusted experts.
        </p>
      </div>

      {/* Cards  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="group bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
          >
            {/* Image Container */}
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority={blog.id === 1} 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Date Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-blue-700 font-medium text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Calendar size={16} />
                {blog.date}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-4">
                {blog.category}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                {blog.description}
              </p>

              <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition group/btn">
                Read More
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="text-center mt-16">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
          View All Blogs & News
        </button>
      </div>
    </section>
  );
}