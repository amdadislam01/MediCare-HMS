'use client';

import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane,
  FaUser,
  FaCommentAlt
} from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      id: 1,
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone Number",
      details: ["+880 1234-567890", "+1 (800) 123-4567"],
      color: "text-[#2563EB]"
    },
    {
      id: 2,
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Address",
      details: ["info@hospitalms.com", "support@medicareplus.com"],
      color: "text-[#16A34A]"
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      details: ["123 Healthcare Ave, Medical District, NY 10001"],
      color: "text-[#2563EB]"
    },
    {
      id: 4,
      icon: <FaClock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 10:00 PM", "Sunday: 9:00 AM - 6:00 PM"],
      color: "text-[#16A34A]"
    }
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

    console.log('Form submitted:', formData);

    toast.success('Message sent successfully! We will get back to you soon.');

    setFormData({
      user_name: '',
      user_email: '',
      user_phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen max-w-7xl bg-[#F8FAFC]">
      <Toaster 
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#0F172A',
          },
          success: {
            iconTheme: {
              primary: '#16A34A',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#DC2626',
              secondary: '#fff',
            },
          },
        }}
      />

      <div className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Have questions? We'd love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-[#E5E7EB]">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                Get In Touch
              </h2>
              <p className="text-[#475569] mb-6">
                Our team is here to help you 24/7. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.id} className="flex items-start space-x-4">
                    <div className={`${info.color} mt-1`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-[#475569] text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#DC2626] to-[#B91C1C] text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Emergency Contact</h3>
              <p className="text-red-100 text-sm mb-4">
                For urgent medical assistance, please call:
              </p>
              <p className="text-2xl font-bold">999</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 border border-[#E5E7EB]">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Full Name <span className="text-[#DC2626]">*</span>
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-[#0F172A]"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Email Address <span className="text-[#DC2626]">*</span>
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-[#0F172A]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_phone" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        type="tel"
                        id="user_phone"
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-[#0F172A]"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Subject <span className="text-[#DC2626]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-[#0F172A]"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Appointment Inquiry</option>
                      <option value="general">General Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Message <span className="text-[#DC2626]">*</span>
                  </label>
                  <div className="relative">
                    <FaCommentAlt className="absolute left-3 top-4 text-[#94A3B8]" />
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-[#0F172A] resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
