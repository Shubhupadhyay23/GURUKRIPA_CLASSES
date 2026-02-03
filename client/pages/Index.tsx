import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Zap,
  Check,
} from "lucide-react";
import { useEffect, useState } from "react";
import { submitInquiry, submitEnrollment } from "@/lib/supabase";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [programsVisible, setProgramsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.program
    ) {
      alert("Please fill all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitInquiry(formData);
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", program: "" });
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        const errorMsg =
          result.error instanceof Error
            ? result.error.message
            : JSON.stringify(result.error);
        console.error("Supabase Error Details:", errorMsg);
        alert(`Error: ${errorMsg || "Failed to submit inquiry. Please try again."}`);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      console.error("Full Error:", error);
      alert(`Error: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    { name: "RAS", icon: "📚", color: "from-blue-500 to-cyan-500", delay: 0 },
    {
      name: "REET",
      icon: "👨‍🏫",
      color: "from-purple-500 to-pink-500",
      delay: 100,
    },
    {
      name: "1st & 2nd Grade",
      icon: "🎓",
      color: "from-green-500 to-emerald-500",
      delay: 200,
    },
    {
      name: "CET",
      icon: "🏆",
      color: "from-orange-500 to-red-500",
      delay: 300,
    },
    {
      name: "PSI",
      icon: "⚖️",
      color: "from-indigo-500 to-blue-500",
      delay: 400,
    },
  ];

  const features = [
    {
      title: "Expert Faculty",
      description: "Experienced instructors dedicated to your success",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Comprehensive Curriculum",
      description: "Updated course material aligned with latest exam patterns",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Proven Track Record",
      description: "Consistent success in all major competitive exams",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: 5, label: "Programs Offered", suffix: "+" },
    { number: 100, label: "Success Rate", suffix: "%" },
    { number: 500, label: "Students Trained", suffix: "+" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-400 opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-md shadow-sm animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:animate-pulse-scale transition-all">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900">
                  GURUKRIPA
                </span>
                <span className="text-xs text-gray-500">Classes Chomu</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#programs"
                className="text-gray-700 hover:text-blue-600 transition relative group"
              >
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:8619836193"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48 animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div
                className={`space-y-4 transition-all duration-1000 ${isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-8"}`}
              >
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  GURUKRIPA
                  <br />
                  CLASSES
                </h1>
                <p className="text-xl text-blue-100">
                  Your Gateway to Success in RAS, REET, CET, PSI & Grade Exams
                </p>
              </div>

              <div
                className={`space-y-3 transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-8"}`}
              >
                <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0 group-hover:animate-bounce" />
                  <div>
                    <p className="font-semibold">Dholi Mandi, Chomu</p>
                    <p className="text-sm text-blue-100">
                      In front of Orchid Mall
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <a
                    href="tel:8619836193"
                    className="font-semibold hover:text-blue-100"
                  >
                    8619836193
                  </a>
                </div>
              </div>

              <div
                className={`flex gap-4 pt-4 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-8"}`}
              >
                <a
                  href="tel:8619836193"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 hover:shadow-2xl hover:shadow-blue-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Get More Info
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div
              className={`hidden md:block relative transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-12"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-3xl opacity-30 animate-float"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 group">
                <div className="grid grid-cols-2 gap-4">
                  {programs.slice(0, 4).map((prog, idx) => (
                    <div
                      key={prog.name}
                      className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center group"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                  {stat.suffix}
                </div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive coaching for all major competitive exams with proven
              success
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {programs.map((program, index) => (
              <div
                key={program.name}
                className={`group bg-gradient-to-br ${program.color} rounded-2xl p-8 text-white cursor-pointer transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl animate-bounce-in`}
                style={{ animationDelay: `${program.delay}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:animate-float transition-all duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold">{program.name}</h3>
                <p className="text-white text-opacity-80 text-sm mt-2 group-hover:text-opacity-100 transition-all">
                  Expert coaching for success
                </p>
                <div className="mt-4 h-1 bg-white bg-opacity-20 rounded-full overflow-hidden">
                  <div className="h-full bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-blue-200 animate-fade-in-up">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="hover:translate-y-(-2) transition-transform duration-300">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  RAS
                </h4>
                <p className="text-gray-600 text-sm">
                  Rajasthan Administrative Services examination preparation with
                  comprehensive study materials and expert guidance.
                </p>
              </div>
              <div className="hover:translate-y-(-2) transition-transform duration-300">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  REET & Grade
                </h4>
                <p className="text-gray-600 text-sm">
                  Teacher recruitment examination coaching for 1st & 2nd Grade
                  with proven teaching methodologies.
                </p>
              </div>
              <div className="hover:translate-y-(-2) transition-transform duration-300">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  CET & PSI
                </h4>
                <p className="text-gray-600 text-sm">
                  Common Eligibility Test and Police Sub-Inspector exam
                  preparation with focused curriculum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose GURUKRIPA?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best coaching experience with focus on individual
              student growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-blue-50 hover:to-cyan-50 transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-12 text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 animate-fade-in-left">
                  Run by RAJENDRA GURJAR
                </h3>
                <p className="text-blue-100 mb-6 animate-fade-in-left">
                  With years of experience in competitive exam coaching,
                  RAJENDRA GURJAR leads GURUKRIPA CLASSES with a commitment to
                  academic excellence and individual student development. Our
                  approach combines traditional teaching methods with modern
                  educational techniques.
                </p>
                <div className="space-y-2 animate-fade-in-left">
                  <p className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Personalized learning approach
                  </p>
                  <p className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                    <span
                      className="w-2 h-2 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    Regular mock tests and evaluations
                  </p>
                  <p className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                    <span
                      className="w-2 h-2 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                    Doubt clearing sessions
                  </p>
                  <p className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                    <span
                      className="w-2 h-2 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    ></span>
                    Updated course materials
                  </p>
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                <div className="absolute inset-0 bg-white opacity-10 rounded-2xl animate-pulse"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:border-opacity-40 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-pulse transition-all">
                      <span className="text-4xl">👨‍🏫</span>
                    </div>
                    <h4 className="text-xl font-bold">Rajendra Gurjar</h4>
                    <p className="text-blue-100 text-sm mt-2">
                      Founder & Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey towards success? Contact us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-200 group animate-fade-in-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <a
                      href="tel:8619836193"
                      className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all"
                    >
                      8619836193
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-cyan-200 group animate-fade-in-left"
                style={{ animationDelay: "100ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:scale-125 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                    <MapPin className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Dholi Mandi, Chomu
                      <br />
                      In front of Orchid Mall
                      <br />
                      Rajasthan
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-purple-200 group animate-fade-in-left"
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    <Users className="w-6 h-6 text-purple-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Programs</h4>
                    <p className="text-gray-600 text-sm">
                      RAS • REET • 1st & 2nd Grade
                      <br />
                      CET • PSI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-6">Quick Contact Form</h3>
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <Check className="w-16 h-16 text-white mb-4 animate-bounce" />
                  <p className="text-lg font-semibold">
                    Inquiry Submitted Successfully!
                  </p>
                  <p className="text-blue-100 text-sm mt-2">
                    We'll contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 group-focus:border-opacity-50"
                      required
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 group-focus:border-opacity-50"
                      required
                    />
                  </div>
                  <div className="group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 group-focus:border-opacity-50"
                      required
                    />
                  </div>
                  <div className="group">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 appearance-none cursor-pointer group-focus:border-opacity-50"
                      required
                    >
                      <option value="" className="text-gray-900">
                        Select Program
                      </option>
                      <option value="RAS" className="text-gray-900">
                        RAS
                      </option>
                      <option value="REET" className="text-gray-900">
                        REET
                      </option>
                      <option value="1st & 2nd Grade" className="text-gray-900">
                        1st & 2nd Grade
                      </option>
                      <option value="CET" className="text-gray-900">
                        CET
                      </option>
                      <option value="PSI" className="text-gray-900">
                        PSI
                      </option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
              <p className="text-blue-100 text-sm mt-4">
                Or call directly:{" "}
                <a
                  href="tel:8619836193"
                  className="font-bold hover:text-white transition-colors"
                >
                  8619836193
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 border-t-2 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0 group hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:animate-pulse-scale">
                G
              </div>
              <span className="font-bold group-hover:text-blue-400 transition-colors">
                GURUKRIPA CLASSES CHOMU
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">
                © 2024 Gurukripa Classes. All rights reserved.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Dholi Mandi, Chomu | Phone:{" "}
                <a
                  href="tel:8619836193"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  8619836193
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
