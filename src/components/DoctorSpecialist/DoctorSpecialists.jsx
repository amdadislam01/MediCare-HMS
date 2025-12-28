"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DoctorSpecialists = () => {
  const specialists = [
    {
      id: 1,
      name: "Dr. Ayesha Rahman",
      specialist: "Pediatrician",
      img: "https://i.ibb.co.com/0yJB14Zm/Screenshot-2025-04-20-153743.png",
    },
    {
      id: 2,
      name: "Dr. Tanveer Ahmed",
      specialist: "Orthopedic Surgeon",
      img: "https://i.ibb.co.com/s9H9JxKw/Screenshot-2025-04-20-163041.png",
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      specialist: "Oncologist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSAt2UguS2Rjut9738K3fuq9_mxliS66aUg&s",
    },
    {
      id: 4,
      name: "Dr. Emily Brown",
      specialist: "Dermatologist",
      img: "https://i.ibb.co/F4M3hFY4/image.png",
    },
    {
      id: 5,
      name: "Dr. Ariful Islam",
      specialist: "Cardiologist",
      img: "https://i.ibb.co.com/FbsX85Nn/image.png",
    },
    {
      id: 6,
      name: "Dr. Maria Sultana",
      specialist: "Ophthalmologist",
      img: "https://i.ibb.co.com/W4VzJHWD/Screenshot-2025-04-20-152458.png",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Title Section */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-black uppercase tracking-tight">
            OUR <span className="text-primary">EXPERT</span> DOCTORS
          </h2>
          <div className="h-1 w-16 md:w-20 bg-primary mx-auto my-4 rounded-full"></div>
          <p className="text-secondary text-sm md:text-base leading-relaxed">
            Meet our highly skilled team of expert doctors, dedicated to
            providing top-quality medical care.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative px-0 sm:px-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2} // Mobile view: shows 1 full card and part of the next
            loop={true} // Infinite loop: prevents jumping back to start
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              // Tablet view: 2 cards
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Desktop view: Always 4 cards
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="pb-12 px-2! sm:px-0!"
          >
            {specialists.map((doc) => (
              <SwiperSlide key={doc.id}>
                <div className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                  {/* Image Container */}
                  <div className="aspect-3/4 overflow-hidden bg-gray-100 relative">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Button: Visible on hover with animation */}
                    <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-lg translate-y-6 group-hover:translate-y-0 transition-transform duration-500 hover:bg-opacity-90 active:scale-95 cursor-pointer">
                        Book Appointment
                      </button>
                    </div>
                  </div>

                  {/* Doctor Information */}
                  <div className="p-4 md:p-5 text-center">
                    <p className="text-secondary text-[10px] md:text-xs font-medium mb-1 uppercase tracking-widest">
                      {doc.specialist}
                    </p>
                    <h3 className="text-base md:text-lg font-bold text-primary truncate transition-colors duration-300">
                      {doc.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows: Hidden on mobile for better UX */}
          <button className="hidden sm:flex swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center text-primary shadow-md hover:bg-primary hover:text-white transition-all focus:outline-none">
            ❮
          </button>
          <button className="hidden sm:flex swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center text-primary shadow-md hover:bg-primary hover:text-white transition-all focus:outline-none">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSpecialists;
