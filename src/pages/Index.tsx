import { useEffect, useState } from "react";
import { ChevronDown, Mail, MapPin, Phone, Menu, X } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.add("visible");
        }
      });
    });
    document.querySelectorAll(".animate-on-scroll, .fade-up-section").forEach(element => {
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const achievements = [{
    number: "25+",
    label: "Years of Public Service"
  }, {
    number: "100+",
    label: "Policy Initiatives"
  }, {
    number: "1M+",
    label: "Lives Impacted"
  }];

  const timeline = [{
    year: "2023",
    title: "APC Senatorial Candidate",
    description: "Led a transformative campaign focused on progressive policies.",
    image: "/placeholder.svg"
  }, {
    year: "2015-2017",
    title: "Senator",
    description: "Served as Chairman, Senate Committee on NEPAD.",
    image: "/placeholder.svg"
  }, {
    year: "2014-2015",
    title: "Acting Governor",
    description: "Implemented critical reforms and development projects.",
    image: "/placeholder.svg"
  }, {
    year: "2007-2012",
    title: "Deputy Governor",
    description: "Championed educational and infrastructure development.",
    image: "/placeholder.svg"
  }];

  const awards = [{
    title: "Distinguished Leadership Award",
    year: "2022",
    organization: "Nigerian Senate",
    description: "Recognized for exceptional parliamentary leadership"
  }, {
    title: "Public Service Excellence Award",
    year: "2020",
    organization: "Federal Government of Nigeria",
    description: "For outstanding contribution to national development"
  }, {
    title: "Humanitarian Service Award",
    year: "2018",
    organization: "NGO Consortium",
    description: "For impactful community development initiatives"
  }];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return <div className="min-h-screen">
      <header className="fixed w-full z-50 bg-royal/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-[14px] rounded-none">
            <div className="text-white font-playfair text-xl">Sen. A.S. Danladi</div>
            
            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-royal md:bg-transparent`}>
              <ul className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0">
                <li><button onClick={() => scrollToSection('about')} className="nav-link text-white">About</button></li>
                <li><button onClick={() => scrollToSection('journey')} className="nav-link text-white">Journey</button></li>
                <li><button onClick={() => scrollToSection('awards')} className="nav-link text-white">Awards</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="nav-link text-white">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="nav-link text-white">Contact</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="parallax min-h-screen flex items-center justify-center text-center relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/placeholder.svg')`
      }}></div>
        <div className="absolute inset-0 bg-royal/90"></div>
        <div className={`relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <img alt="Senator Abubakar Sani Danladi" className="profile-image w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold mx-auto object-cover shadow-xl" src="/lovable-uploads/efaed3e1-9a95-4eb0-80c7-480c9a08841e.jpg" />
          </div>
          <span className="text-gold font-inter uppercase tracking-wider mb-4 block">Welcome to the Official Portfolio of</span>
          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6">Sen. Abubakar Sani Danladi</h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            "Leadership Rooted in Service, Commitment, and Progress."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollToSection('about')} className="gold-button">Explore My Journey</button>
          </div>
          <ChevronDown className="text-gold w-12 h-12 mx-auto mt-12 animate-bounce" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => <div key={index} className="achievement-card animate-on-scroll opacity-0 text-center p-8 border border-gold/20 rounded-lg hover:border-gold transition-all duration-300">
                <div className="font-playfair text-4xl text-royal mb-2">{achievement.number}</div>
                <div className="text-royal/80">{achievement.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up-section">
              <img alt="Senator at work" className="timeline-image rounded-lg shadow-xl w-full h-[500px] object-cover" src="/lovable-uploads/e3aae050-31d0-41f6-9827-0ec97b9118bc.jpg" />
            </div>
            <div className="fade-up-section">
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

      <section id="journey" className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-16">Leadership Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => <div key={index} className="timeline-item animate-on-scroll">
                <div className="timeline-dot"></div>
                <div className="ml-4">
                  <div className="mb-4">
                    <img src={item.image} alt={item.title} className="timeline-image w-full h-48 object-cover rounded-lg shadow-md" />
                  </div>
                  <span className="text-gold font-playfair text-xl">{item.year}</span>
                  <h3 className="text-2xl font-playfair text-royal mt-1">{item.title}</h3>
                  <p className="text-royal/70 mt-2">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <section id="awards" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-16">Titles & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="fade-up-section p-6 bg-white rounded-lg shadow-lg border border-gold/20 hover:border-gold transition-all duration-300">
                <div className="text-gold font-playfair text-lg mb-2">{award.year}</div>
                <h3 className="text-xl font-playfair text-royal mb-2">{award.title}</h3>
                <div className="text-sm text-royal/70 mb-3">{award.organization}</div>
                <p className="text-royal/80">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => <div key={index} className="fade-up-section">
                <img alt={`Gallery image ${index + 1}`} className="gallery-image w-full h-64 object-cover rounded-lg shadow-md" src="/lovable-uploads/11de62b8-f656-4e12-90bb-15daec7f35cb.jpg" />
              </div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-royal text-white">
        <div className="container">
          <h2 className="section-title text-white text-center">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4 fade-up-section">
                <Phone className="contact-icon text-gold w-6 h-6" />
                <span>+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-4 fade-up-section">
                <Mail className="contact-icon text-gold w-6 h-6" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-4 fade-up-section">
                <MapPin className="contact-icon text-gold w-6 h-6" />
                <span>Abuja, Nigeria</span>
              </div>
            </div>

            <form className="space-y-6 fade-up-section">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold resize-none"></textarea>
              </div>
              <button type="submit" className="gold-button w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>;
};

export default Index;
