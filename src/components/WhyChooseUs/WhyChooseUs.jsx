"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What makes our Hospital Management System different?",
      answer:
        "We provide personalized healthcare using advanced technology, role-based dashboards, secure JWT authentication, and complete patient management.",
    },
    {
      id: 2,
      question: "How does the system ensure service quality?",
      answer:
        "Enterprise-level architecture, clean code practices, RBAC, validation, and scalable design for medium to large hospitals.",
    },
    {
      id: 3,
      question: "Is the system available 24/7?",
      answer:
        "Yes, patient records, appointments, pharmacy, and billing are accessible 24/7.",
    },
    {
      id: 4,
      question: "What services does the HMS provide?",
      answer:
        "Patient registration, appointments, prescriptions, pharmacy, billing, analytics, and medical history management.",
    },
    {
      id: 5,
      question: "How is patient data protected?",
      answer:
        "bcrypt password hashing, JWT authentication, RBAC, secure APIs, and strict data validation.",
    },
    {
      id: 6,
      question: "Can patients book appointments online?",
      answer:
        "Yes! Patients can book, reschedule, and track appointments with real-time doctor availability.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-blue-600 underline">Choose Us</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            We deliver high-quality healthcare solutions powered by modern
            technology and reliable 24/7 support.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hospital.png"
              alt="Hospital Management System"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
                >
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <span className="text-blue-600">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 p-4 sm:p-5 pt-0" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
