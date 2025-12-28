import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

// Team members data 
const teamMembers = [
  {
    id: 1,
    name: "MD Amdad Islam",
    role: "MERN Stack Developer (Leader)",
    image: "https://i.ibb.co.com/7xVcPK5B/Whats-App-Image-2025-11-28-at-10-25-15-AM.jpg",
    github: "https://github.com/amdadislam01",
    linkedin: "https://www.linkedin.com/in/amdadislam01/",
    email: "amdadislam733@@gmail.com",
  },
  {
    id: 2,
    name: "Ashikur Rahman",
    role: "Front-end Developer (Co-Leader)",
    image:"https://avatars.githubusercontent.com/u/222041560?v=4",
    github: "https://github.com/ashikurahman1 ",
    linkedin: "https://linkedin.com/in/ashikur-dev/",
    email: "sm.ashikurahman@gmail.com",
  },
  {
    id: 3,
    name: "Md. Abu Sufian",
    role: "Front-end Developer",
    image:"https://avatars.githubusercontent.com/u/218387687?v=4",
    github: "https://github.com/sufiancse",
    linkedin: "https://www.linkedin.com/in/abusufian01/",
    email: "sufian.cse24@gmail.com",
  },
  {
    id: 4,
    name: "HasibuI Islam Niloy",
    role: "Front-end Developer",
    image: "https://avatars.githubusercontent.com/u/98762815?v=4",
    github: "https://github.com/hasibulnilo",
    linkedin: "https://www.linkedin.com/in/hasibulislamniloy/",
    email: "hasibulislamniloy142@gmail.com",
  },
  {
    id: 5,
    name: "Dibakar Biswas",
    role: "Front-end Developer",
    image:"https://avatars.githubusercontent.com/u/155173023?v=4",
    github: "https://github.com/Dibakar-Biswas",
    linkedin: "https://www.linkedin.com/in/Dibakar-Biswas/",
    email: "dibakarbiswas742@gmail.com",
  },
  {
    id: 6,
    name: "Siddikur Rahman",
    role: "MERN Stack Developer",
    image: "https://avatars.githubusercontent.com/u/187284559?v=4",
    github: "https://github.com/siddikur-dev/",
    linkedin: "https://www.linkedin.com/in/siddikur-dev/",
    email: "siddikur.dev@gmail.com",
  },
  {
    id: 7,
    name: "Tushar Chowdhury",
    role: "MERN Stack Developer",
    image: "https://avatars.githubusercontent.com/u/160826450?v=4",
    github: "https://github.com/TusharChow20/",
    linkedin: "https://www.linkedin.com/in/tusharchowdhury20211/",
    email: "tusharchowdhury20211@gmail.com",
  },
];

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    <Icon className="h-5 w-5 text-[#0E82FD]" />
  </a>
);

const TeamMemberCard = ({ member }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
    <div className="relative h-96 overflow-hidden">
      <Image
        src={member?.image || "/placeholder.svg"}
        alt={member.name}
        fill
        className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
        {member.github && (
          <SocialLink href={member.github} icon={Github} label="GitHub" />
        )}
        {member.linkedin && (
          <SocialLink href={member.linkedin} icon={Linkedin} label="LinkedIn" />
        )}
        {member.email && (
          <SocialLink
            href={`mailto:${member.email}`}
            icon={Mail}
            label="Email"
          />
        )}
      </div>
    </div>

    <div className="p-8 text-center bg-white">
      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
      <p className="mt-3 text-[#0E82FD] font-semibold text-lg">{member.role}</p>
    </div>
  </div>
);

const TeamSection = ({ title, description }) => (
  <section className="py-24 ">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <p className="text-blue font-semibold uppercase tracking-widest text-sm">
          {title || "Meet Our Team"}
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
          The Brilliant <span className="text-blue">Minds</span> Behind
          MediCare
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          {description ||
            "Our dedicated team of developers and healthcare enthusiasts combines cutting-edge technology with deep domain expertise to create a platform that truly cares for your health."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
