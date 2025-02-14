
import { useEffect, useState } from "react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { number: "25+", label: "Years of Public Service" },
    { number: "100+", label: "Policy Initiatives" },
    { number: "1M+", label: "Lives Impacted" },
  ];

  const timeline = [
    {
      year: "2023",
      title: "APC Senatorial Candidate",
      description: "Led a transformative campaign focused on progressive policies.",
      image: "/placeholder.svg"
    },
    {
      year: "2015-2017",
      title: "Senator",
      description: "Served as Chairman, Senate Committee on NEPAD.",
      image: "/placeholder.svg"
    },
    {
      year: "2014-2015",
      title: "Acting Governor",
      description: "Implemented critical reforms and development projects.",
      image: "/placeholder.svg"
    },
    {
      year: "2007-2012",
      title: "Deputy Governor",
      description: "Championed educational and infrastructure development.",
      image: "/placeholder.svg"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="parallax min-h-screen flex items-center justify-center text-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/placeholder.svg')` }}
        ></div>
        <div className="absolute inset-0 bg-royal/90"></div>
        <div className={`relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <img 
              src="/placeholder.svg" 
              alt="Senator Abubakar Sani Danladi" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold mx-auto object-cover shadow-xl"
            />
          </div>
          <span className="text-gold font-inter uppercase tracking-wider mb-4 block">Welcome to the Official Portfolio of</span>
          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6">Sen. Abubakar Sani Danladi</h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            "Leadership Rooted in Service, Commitment, and Progress."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="gold-button">Explore My Journey</button>
          </div>
          <ChevronDown className="text-gold w-12 h-12 mx-auto mt-12 animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="animate-on-scroll opacity-0 text-center p-8 border border-gold/20 rounded-lg hover:border-gold transition-all duration-300">
                <div className="font-playfair text-4xl text-royal mb-2">{achievement.number}</div>
                <div className="text-royal/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img 
                src="/placeholder.svg" 
                alt="Senator at work" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="animate-on-scroll opacity-0">
              <h2 className="section-title">The Man Behind the Mission</h2>
              <p className="text-lg text-royal/80 mb-6">
                A dedicated leader committed to transformative change and sustainable development
                in Nigeria, with a focus on education, infrastructure, and economic growth.
              </p>
              <p className="text-lg text-royal/80">
                With over two decades of public service experience, Senator Danladi has
                demonstrated unwavering commitment to the development of Nigeria through
                various leadership positions and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section with Images */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-16">Leadership Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item animate-on-scroll opacity-0">
                <div className="timeline-dot"></div>
                <div className="ml-4">
                  <div className="mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <span className="text-gold font-playfair text-xl">{item.year}</span>
                  <h3 className="text-2xl font-playfair text-royal mt-1">{item.title}</h3>
                  <p className="text-royal/70 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="animate-on-scroll opacity-0">
                <img 
                  src="/placeholder.svg" 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-royal text-white">
        <div className="container">
          <h2 className="section-title text-white text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 animate-on-scroll opacity-0">
              <Phone className="text-gold w-6 h-6" />
              <span>+234 XXX XXX XXXX</span>
            </div>
            <div className="flex items-center justify-center gap-4 animate-on-scroll opacity-0">
              <Mail className="text-gold w-6 h-6" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center justify-center gap-4 animate-on-scroll opacity-0">
              <MapPin className="text-gold w-6 h-6" />
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
