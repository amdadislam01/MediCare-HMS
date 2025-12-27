import Image from "next/image";
import { Calendar } from "lucide-react";

export default function BlogCard() {
  const blogs = [
    {
      id: 1,
      title: "Treating Cold and Cough with a General Physician",
      description:
        "Cold and cough are two of the most common health conditions we encounter throughout the year. General physicians across the country experience a surge...",
      image: "https://media.istockphoto.com/id/1432526697/photo/small-girl-coughing-on-appointment-at-doctors-office.jpg?s=612x612&w=0&k=20&c=GdZh5xI0YB9Tz7qgT9spE8ElnvjvroBB2Av85c-2vuw=",
      date: "29 Apr 2025",
      category: "Doctor",
    },
    {
      id: 2,
      title: "How To Monitor Patients Effectively In A Home ICU",
      description:
        "Thanks to medical and technological advancements, it is possible to set up an ICU at home. However, it is important to know how the setup operates...",
      image: "https://selfimed.com/cdn/shop/articles/hospital-monitoring-equipment-stockcake_0cbe9af9-13d9-4d59-a1d6-18e649c3f2e2.jpg?v=1766404206",
      date: "28 Apr 2025",
      category: "Doctor",
    },
    {
      id: 3,
      title: "Living Well With Diabetes: Tips For Daily Management",
      description:
        "We all have someone in our immediate or extended families who suffers from diabetes. It is one of the most common chronic health conditions...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKZhGXxb8hjlWFSoPfJcXkgWyzV1gv-ld0g&s",
      date: "28 Apr 2025",
      category: "Doctor",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          BLOGS <span className="text-blue">& NEWS</span>
        </h2>
        <p className="text-gray-600 mt-3">
          Stay informed with the latest insights and updates in healthcare
          through our Blogs & News section
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group rounded-2xl shadow-lg overflow-hidden bg-main
            transform transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />

              {/* Date badge */}
              <div className="absolute top-4 right-4 bg-white text-blue text-sm px-3 py-1 rounded-full flex items-center gap-2 shadow">
                <Calendar size={14} />
                {blog.date}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="inline-block text-sm text-blue secondary-light px-3 py-1 rounded-full mb-3">
                {blog.category}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                {blog.description}
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                Read More...
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
