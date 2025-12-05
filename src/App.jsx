import React, { useState, useEffect } from "react";
import myPhoto from "./assets/myPhoto.jpg";

import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  User,
  Menu,
  X,
  FileText,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ayub_Khan_CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl">
                AK
              </div>
              <span className="font-bold text-xl hidden sm:block">
                Ayub Khan
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "experience",
                "education",
                "certificates",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? "text-blue-400" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "home",
                "about",
                "experience",
                "education",
                "certificates",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-700 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse-slow">
              <img
                src={myPhoto}
                alt="Ayub Khan"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-slide-up">
            AYUB KHAN
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 animate-slide-up-delay-1">
            Admin Coordinator & Document Controller
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up-delay-2">
            Versatile professional with hands-on experience in maintenance and
            strong administrative coordination skills
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-slide-up-delay-3">
            <button
              onClick={downloadCV}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <Download size={20} />
              Download CV
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 border border-slate-600"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12 animate-slide-up-delay-4">
            <a
              href="https://www.linkedin.com/in/ayub-khan-b21741285"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/ulama_ayub_khan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/916362494842"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
            >
              <Phone size={24} />
            </a>
            <a
              href="mailto:ayubhayathkhan@gmail.com"
              className="w-12 h-12 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <User className="text-blue-400" />
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Highly organized and detail-oriented Administrative Coordinator
                with expertise in office operations, document control, and
                employee management. Proven track record in coordinating
                day-to-day administrative functions while supporting technical
                service tasks.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Office Operations",
                  "Document Control",
                  "Data Entry",
                  "ID Card Issuance",
                  "MS Office Suite",
                  "Oracle Fusion",
                  "Record Keeping",
                  "Team Coordination",
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800 px-3 py-2 rounded-lg text-sm text-center hover:bg-blue-600 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              Personal Information
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">Mandya, Karnataka</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="text-purple-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Date of Birth</p>
                  <p className="font-semibold">02 Oct 2000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="text-green-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Languages</p>
                  <p className="font-semibold">Urdu, English, Kannada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-blue-400" />
            Work Experience
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="relative pl-8 md:pl-0 md:w-1/2 md:ml-auto md:pl-12">
                <div className="absolute left-0 md:left-auto md:right-full md:mr-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 transform md:translate-x-1/2"></div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">
                        Admin Coordinator & Document Controller
                      </h3>
                      <p className="text-lg text-gray-300 mt-1">
                        Zamil Service, Saudi jubail.
                      </p>
                    </div>
                  </div>
                  <p className="text-purple-400 font-semibold mb-4">
                    Nov 2023 - Nov 2025
                  </p>

                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>
                        Coordinated day-to-day administrative functions ensuring
                        smooth office operations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>
                        Managed calendars, scheduled meetings, and arranged
                        travel logistics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>
                        Maintained employee database and issued ID cards, access
                        badges, and security passes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>
                        Coordinated mobilization process for employees and
                        contractors to project sites
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>
                        Verified pre-mobilization requirements including IDs,
                        permits, visas, and certifications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>
                        Drafted internal memos, correspondence, presentations,
                        and meeting minutes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-blue-400" />
            Education
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2 text-center">
                Diploma in Mechanical Engineering
              </h3>
              <p className="text-gray-300 mb-2 text-center">
                Intellectual Institute of Management & Technology
              </p>
              <p className="text-blue-400 font-semibold text-center">2023</p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2 text-center">
                Pre-University College
              </h3>
              <p className="text-gray-300 mb-2 text-center">
                Mandavya PU College
              </p>
              <p className="text-blue-400 font-semibold text-center">2019</p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-green-500 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2 text-center">
                Diploma in Accounting & MS Office
              </h3>
              <p className="text-gray-300 mb-2 text-center">Future Computers</p>
              <p className="text-blue-400 font-semibold text-center">2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Award className="text-blue-400" />
            Certificates & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Certificate placeholders - you can add actual certificate images later */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105">
              <div className="aspect-[4/3] rounded-lg mb-5 overflow-hidden border border-slate-600">
                <img
                  src="/certificates/cert1.jpg" // your image from public folder
                  alt="Certificate 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
              <div className="aspect-[4/5.5] rounded-lg mb-5 overflow-hidden border border-slate-600">
                <div className="text-center">
                  <img
                    src="/certificates/cert2.jpg" // your image from public folder
                    alt="Certificate 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gallery from provided images */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">
              Professional Gallery
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105">
                <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
                  <img
                    src="/gallery/img1.jpg"
                    alt="Gallery Photo 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all transform hover:scale-105">
                <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
                  <img
                    src="/gallery/img2.jpg"
                    alt="Gallery Photo 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Mail className="text-blue-400" />
            Get In Touch
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:ayubhayathkhan@gmail.com"
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-red-500 transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">ayubhayathkhan@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+916362494842"
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-green-500 transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone / WhatsApp</p>
                <p className="font-semibold">+91 6362494842</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ayub-khan-b21741285"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Linkedin size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="font-semibold">Ayub Khan</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/ulama_ayub_khan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Instagram size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Instagram</p>
                <p className="font-semibold">@ulama_ayub_khan</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/916362494842"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone size={24} />
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">© 2025 Ayub Khan. All rights reserved.</p>
          <p className="text-sm">Built with React, Vite & Tailwind CSS</p>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        .animate-slide-up-delay-1 {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
        .animate-slide-up-delay-2 {
          animation: slideUp 0.8s ease-out 0.4s both;
        }
        .animate-slide-up-delay-3 {
          animation: slideUp 0.8s ease-out 0.6s both;
        }
        .animate-slide-up-delay-4 {
          animation: slideUp 0.8s ease-out 0.8s both;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
