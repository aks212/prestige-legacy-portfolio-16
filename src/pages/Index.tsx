import { useEffect, useState } from "react";
import { ChevronDown, Mail, MapPin, Phone, Menu, X, Facebook, Twitter, Instagram, Youtube, XCircle } from "lucide-react";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
    image: "/lovable-uploads/f7068961-3fef-496f-ac24-c6ec3de35873.png"
  }, {
    year: "2015-2017",
    title: "Senator",
    description: "Served as Chairman, Senate Committee on NEPAD.",
    image: "/lovable-uploads/f7068961-3fef-496f-ac24-c6ec3de35873.png"
  }, {
    year: "2014-2015",
    title: "Acting Governor",
    description: "Implemented critical reforms and development projects.",
    image: "/lovable-uploads/19002cb2-765a-459b-8eb1-e626cb4b078e.png"
  }, {
    year: "2007-2012",
    title: "Deputy Governor",
    description: "Championed educational and infrastructure development.",
    image: "/lovable-uploads/19002cb2-765a-459b-8eb1-e626cb4b078e.png"
  }];
  const traditionalTitles = [{
    title: "Sardaunan Muri",
    year: "2015",
    conferredBy: "Emir of Muri",
    description: "Traditional title recognizing leadership and contributions to community development"
  }, {
    title: "Garkuwan Matasan",
    year: "2013",
    conferredBy: "Youth Coalition",
    description: "Youth leadership recognition title"
  }, {
    title: "Wakilin Raya",
    year: "2010",
    conferredBy: "Traditional Council",
    description: "Traditional title for community service excellence"
  }, {
    title: "Dan Masanin Taraba",
    year: "2008",
    conferredBy: "Taraba Traditional Council",
    description: "Title for intellectual and educational contributions"
  }, {
    title: "Magatakardan Muri",
    year: "2006",
    conferredBy: "Muri Emirate",
    description: "Recognition of leadership excellence and community service"
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
  }, {
    title: "Educational Development Award",
    year: "2016",
    organization: "National Education Board",
    description: "For contributions to educational advancement"
  }, {
    title: "Youth Empowerment Recognition",
    year: "2014",
    organization: "Youth Development Council",
    description: "For initiatives supporting youth entrepreneurship"
  }];
  const galleryImages = ["/lovable-uploads/11de62b8-f656-4e12-90bb-15daec7f35cb.jpg", "/lovable-uploads/77131393-345c-4704-89ec-23c2fa6bddc9.jpg", "/lovable-uploads/82e9dde3-af19-433c-9189-37632b0894eb.jpg", "/lovable-uploads/a431f8e9-4972-4955-8b6e-f9601b8c0806.jpg", "/lovable-uploads/e3aae050-31d0-41f6-9827-0ec97b9118bc.jpg", "/lovable-uploads/efaed3e1-9a95-4eb0-80c7-480c9a08841e.jpg"];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <div className="min-h-screen flex flex-col">
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
                <li><button onClick={() => scrollToSection('titles')} className="nav-link text-white">Titles</button></li>
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
          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">"Grass-root Politics & community Development."</p>
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
              <img alt="Senator at work" src="/lovable-uploads/e3aae050-31d0-41f6-9827-0ec97b9118bc.jpg" className="timeline-image shadow-xl w-full h-[500px] object-fill rounded-xl" />
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
                    <img src={item.image} alt={item.title} className="timeline-image w-full h-48 object-contain bg-white rounded-lg shadow-md p-4" />
                  </div>
                  <span className="text-gold font-playfair text-xl">{item.year}</span>
                  <h3 className="text-2xl font-playfair text-royal mt-1">{item.title}</h3>
                  <p className="text-royal/70 mt-2">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <section id="titles" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-16">Traditional Titles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {traditionalTitles.map((title, index) => <div key={index} className="fade-up-section p-6 bg-white rounded-lg shadow-lg border border-gold/20 hover:border-gold transition-all duration-300">
                <div className="text-gold font-playfair text-lg mb-2">{title.year}</div>
                <h3 className="text-xl font-playfair text-royal mb-2">{title.title}</h3>
                <div className="text-sm text-royal/70 mb-3">{title.conferredBy}</div>
                <p className="text-royal/80">{title.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      <section id="awards" className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-16">Professional Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => <div key={index} className="fade-up-section p-6 bg-white rounded-lg shadow-lg border border-gold/20 hover:border-gold transition-all duration-300">
                <div className="text-gold font-playfair text-lg mb-2">{award.year}</div>
                <h3 className="text-xl font-playfair text-royal mb-2">{award.title}</h3>
                <div className="text-sm text-royal/70 mb-3">{award.organization}</div>
                
              </div>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => <div key={index} className="fade-up-section">
                <button onClick={() => setSelectedImage(image)} className="w-full">
                  <img alt={`Gallery image ${index + 1}`} className="gallery-image w-full h-64 object-cover rounded-lg shadow-md" src={image} />
                </button>
              </div>)}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white hover:text-gold transition-colors">
              <XCircle className="w-8 h-8" />
            </button>
            <img src={selectedImage} alt="Enlarged gallery image" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
          </div>}
      </section>

      

      <footer className="bg-royal/95 text-white py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-xl mb-4 text-gold">About</h3>
              <p className="text-white/80">
                Dedicated to progressive leadership and sustainable development in Nigeria.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4 text-gold">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-gold transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('journey')} className="text-white/80 hover:text-gold transition-colors">Journey</button></li>
                <li><button onClick={() => scrollToSection('titles')} className="text-white/80 hover:text-gold transition-colors">Titles</button></li>
                <li><button onClick={() => scrollToSection('awards')} className="text-white/80 hover:text-gold transition-colors">Awards</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4 text-gold">Connect</h3>
              <address className="not-italic text-white/80">
                <p>Abuja, Nigeria</p>
                <p className="mt-2">contact@example.com</p>
                <p className="mt-2">+234 XXX XXX XXXX</p>
              </address>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Sen. A.S. Danladi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;