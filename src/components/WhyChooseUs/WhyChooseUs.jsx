"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question:
        "What makes our Hospital Management System different from others?",
      answer:
        "We provide personalized healthcare with advanced technology, ensuring top-quality treatment by expert professionals. Our system features role-based dashboards, secure JWT authentication, and comprehensive patient management across all departments.",
    },
    {
      id: 2,
      question: "How does our system ensure service quality?",
      answer:
        "Our HMS follows enterprise-level development standards with clean code practices, modular architecture, and rigorous testing. We implement role-based access control, data validation, and maintain scalability for medium to large hospitals with multiple departments.",
    },
    {
      id: 3,
      question: "Is the Hospital Management System available 24/7?",
      answer:
        "Yes, our system provides 24/7 availability with continuous access to patient records, appointment scheduling, pharmacy management, and billing operations.",
    },
    {
      id: 4,
      question: "What services does our HMS provide?",
      answer:
        "Patient registration, doctor appointments, prescriptions, pharmacy inventory, billing, analytics dashboards, and full medical history management.",
    },
    {
      id: 5,
      question: "How does our system protect patient data?",
      answer:
        "We use bcrypt password hashing, JWT authentication, RBAC, secure APIs, and strict validation to ensure patient privacy.",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            WHY{" "}
            <span className="text-blue underline decoration-blue-600">
              CHOOSE
            </span>{" "}
            US
          </h2>
          <p className="text-secondary max-w-3xl mx-auto text-lg">
            At our Hospital Management System, we provide personalized,
            high-quality healthcare with advanced technology and 24/7 support.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
            <Image
              src="/hospital.png"
              alt="Hospital"
              width={550}
              height={400}
              className="object-cover rounded-xl"
              priority
            />
          </div>

          {/* FAQ */}
          <div className="">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`rounded-xl shadow-sm transition-transform duration-300 hover:scale-[1.01] ${
                  index !== faqs.length - 1 ? "mb-4" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center p-5 text-left transition-colors duration-300 ${
                    openIndex === index
                      ? "bg-blue-50"
                      : "bg-white hover:bg-blue-50"
                  }`}
                >
                  <span className="font-medium text-primary">
                    {faq.question}
                  </span>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {openIndex === index && (
                  <div className="p-5 text-secondary">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
