"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogCard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          BLOGS <span className="text-blue">& NEWS</span>
        </h2>
        <p className="text-gray-600 mt-3">
          Stay informed with the latest insights and updates in healthcare through our Blogs & News section
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="group rounded-2xl shadow-lg overflow-hidden bg-main transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-56 w-full">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-white text-blue text-sm px-3 py-1 rounded-full flex items-center gap-2 shadow">
                <Calendar size={14} />
                {blog.date}
              </div>
            </div>

            <div className="p-6">
              <span className="inline-block text-sm text-blue secondary-light px-3 py-1 rounded-full mb-3">
                {blog.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-5 line-clamp-3">{blog.description}</p>
              <Link href={`/blogs/${blog.id}`}>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                  Read More...
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
