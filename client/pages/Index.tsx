import { Button } from "@/components/ui/button";
import { Phone, MapPin, Users, BookOpen, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const programs = [
    { name: "RAS", icon: "📚", color: "from-blue-500 to-cyan-500" },
    { name: "REET", icon: "👨‍🏫", color: "from-purple-500 to-pink-500" },
    { name: "1st & 2nd Grade", icon: "🎓", color: "from-green-500 to-emerald-500" },
    { name: "CET", icon: "🏆", color: "from-orange-500 to-red-500" },
    { name: "PSI", icon: "⚖️", color: "from-indigo-500 to-blue-500" },
  ];

  const features = [
    {
      title: "Expert Faculty",
      description: "Experienced instructors dedicated to your success",
      icon: Users,
    },
    {
      title: "Comprehensive Curriculum",
      description: "Updated course material aligned with latest exam patterns",
      icon: BookOpen,
    },
    {
      title: "Proven Track Record",
      description: "Consistent success in all major competitive exams",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900">GURUKRIPA</span>
                <span className="text-xs text-gray-500">Classes Chomu</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition">Programs</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:8619836193" className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  GURUKRIPA<br />CLASSES
                </h1>
                <p className="text-xl text-blue-100">
                  Your Gateway to Success in RAS, REET, CET, PSI & Grade Exams
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Dholi Mandi, Chomu</p>
                    <p className="text-sm text-blue-100">In front of Orchid Mall</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <a href="tel:8619836193" className="font-semibold hover:text-blue-100">
                    8619836193
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="tel:8619836193" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  <Phone size={20} />
                  Call Now
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                  Get More Info
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-4">
                  {programs.map((prog) => (
                    <div key={prog.name} className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-opacity-20 transition">
                      <span className="text-4xl block mb-2">{prog.icon}</span>
                      <p className="text-sm font-semibold">{prog.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive coaching for all major competitive exams with proven success
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {programs.map((program, index) => (
              <div
                key={program.name}
                className={`group bg-gradient-to-br ${program.color} rounded-2xl p-8 text-white cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold">{program.name}</h3>
                <p className="text-white text-opacity-80 text-sm mt-2">
                  Expert coaching for success
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">RAS</h4>
                <p className="text-gray-600 text-sm">Rajasthan Administrative Services examination preparation with comprehensive study materials and expert guidance.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">REET & Grade</h4>
                <p className="text-gray-600 text-sm">Teacher recruitment examination coaching for 1st & 2nd Grade with proven teaching methodologies.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">CET & PSI</h4>
                <p className="text-gray-600 text-sm">Common Eligibility Test and Police Sub-Inspector exam preparation with focused curriculum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GURUKRIPA?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best coaching experience with focus on individual student growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Run by RAJENDRA GURJAR</h3>
                <p className="text-blue-100 mb-6">
                  With years of experience in competitive exam coaching, RAJENDRA GURJAR leads GURUKRIPA CLASSES with a commitment to academic excellence and individual student development. Our approach combines traditional teaching methods with modern educational techniques.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Personalized learning approach
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Regular mock tests and evaluations
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Doubt clearing sessions
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Updated course materials
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white opacity-10 rounded-2xl"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👨‍🏫</span>
                    </div>
                    <h4 className="text-xl font-bold">Rajendra Gurjar</h4>
                    <p className="text-blue-100 text-sm mt-2">Founder & Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey towards success? Contact us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:8619836193" className="text-blue-600 hover:text-blue-700 font-semibold">
                      8619836193
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Dholi Mandi, Chomu<br />
                      In front of Orchid Mall<br />
                      Rajasthan
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Programs</h4>
                    <p className="text-gray-600 text-sm">
                      RAS • REET • 1st & 2nd Grade<br />
                      CET • PSI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 transition"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 transition"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 transition appearance-none cursor-pointer">
                    <option value="" className="text-gray-900">Select Program</option>
                    <option value="ras" className="text-gray-900">RAS</option>
                    <option value="reet" className="text-gray-900">REET</option>
                    <option value="grade" className="text-gray-900">1st & 2nd Grade</option>
                    <option value="cet" className="text-gray-900">CET</option>
                    <option value="psi" className="text-gray-900">PSI</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
                >
                  Send Inquiry
                </button>
              </form>
              <p className="text-blue-100 text-sm mt-4">
                Or call directly: <a href="tel:8619836193" className="font-bold">8619836193</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="font-bold">GURUKRIPA CLASSES CHOMU</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">© 2024 Gurukripa Classes. All rights reserved.</p>
              <p className="text-xs text-gray-400 mt-1">Dholi Mandi, Chomu | Phone: <a href="tel:8619836193" className="text-blue-400 hover:text-blue-300">8619836193</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
