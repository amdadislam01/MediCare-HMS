"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then(res => res.json())
      .then(data => setBlog(data.find(b => b.id === parseInt(id))));
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{blog.date} | {blog.category}</p>

      <div className="relative h-80 w-full mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <p className="text-gray-700">{blog.description}</p>
    </div>
  );
}
