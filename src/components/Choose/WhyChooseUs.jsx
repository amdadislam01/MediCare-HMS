'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import hospitalImg from '../../../public/assets/hospital.jpg'

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What makes our Hospital Management System different from others?",
      answer: "We provide personalized healthcare with advanced technology, ensuring top-quality treatment by expert professionals. Our system features role-based dashboards, secure JWT authentication, and comprehensive patient management across all departments."
    },
    {
      id: 2,
      question: "How does our system ensure service quality?",
      answer: "Our HMS follows enterprise-level development standards with clean code practices, modular architecture, and rigorous testing. We implement role-based access control, data validation, and maintain scalability for medium to large hospitals with multiple departments."
    },
    {
      id: 3,
      question: "Is the Hospital Management System available 24/7?",
      answer: "Yes, our system provides 24/7 availability with continuous access to patient records, appointment scheduling, pharmacy management, and billing operations. The platform is built on Next.js ensuring fast, reliable performance at all times."
    },
    {
      id: 4,
      question: "What services does our HMS provide?",
      answer: "Our comprehensive system includes patient registration, doctor appointment scheduling, prescription management, pharmacy inventory tracking, billing and payment processing, analytics dashboards, and complete medical history management for all users."
    },
    {
      id: 5,
      question: "How does our system protect patient data?",
      answer: "We implement industry-standard security measures including encrypted password storage with bcrypt, JWT-based authentication, role-based access control (RBAC), secure API routes, input validation, and data sanitization to ensure complete patient privacy and HIPAA compliance."
    },
    {
      id: 6,
      question: "Can patients book appointments online?",
      answer: "Absolutely! Our system features an intuitive appointment booking module with date and time slot management, doctor-wise appointment lists, and real-time availability checking. Patients can easily schedule, reschedule, and track their appointments through the platform."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            WHY <span className="text-[#2563EB] underline decoration-[#2563EB]">CHOOSE</span> US
          </h2>
          <p className="text-[#475569] text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            At our Hospital Management System, we provide personalized, high-quality healthcare with advanced 
            technology and 24/7 support. Trust our expert team for compassionate and reliable medical services.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Hospital Image */}
          <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={hospitalImg} 
              alt="Hospital Building"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-[#E5E7EB] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors duration-300 ${
                    openIndex === index
                      ? 'bg-[#DBEAFE] border-b border-[#2563EB]'
                      : 'bg-white hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span className={`font-semibold text-base md:text-lg pr-4 ${
                    openIndex === index ? 'text-[#2563EB]' : 'text-[#0F172A]'
                  }`}>
                    {faq.question}
                  </span>
                  <span className="text-[#2563EB] flex-shrink-0">
                    {openIndex === index ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-4 md:p-5 bg-white">
                    <p className="text-[#475569] leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
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

