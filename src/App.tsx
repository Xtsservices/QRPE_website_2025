import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import HeroSection3D from "./components/HeroSection3D";
import AutoCarousel from "./components/AutoCarousel";
import {
  ParallaxMission,
  ParallaxPartners,
} from "./components/ParallaxSection";
import ServicesSection3D from "./components/ServicesSection3D";
import InsightsSection3D from "./components/InsightsSection3D";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import ContactPage from "./components/ContactPage";
import IndustryPage from "./components/pages/IndustryPage";
import ServicePage from "./components/pages/ServicePage";
import AboutPage from "./components/pages/AboutPage";
import GenericPage from "./components/pages/GenericPage";
import ResourcePage from "./components/pages/ResourcePage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <main>
      <HeroSection3D />
      <AutoCarousel />
      <ParallaxMission />
      <ParallaxPartners />
      <ServicesSection3D />
      <InsightsSection3D />
      <CTASection />
    </main>
  );
}

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="min-h-screen bg-gradient-to-br from-[#0d3054] via-[#0d3054] to-[#0270ca] overflow-x-hidden">
          <CustomCursor />
          <Header />
          <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Industry Pages */}
            <Route path="/industries/:industry" element={<IndustryPage />} />
            
            {/* Service Pages */}
            <Route path="/services/:service" element={<ServicePage />} />
            
            {/* Resource Pages (Blogs & Whitepapers) */}
            <Route path="/resources/:slug" element={<ResourcePage />} />
            <Route path="/blog/:slug" element={<ResourcePage />} />
            
            {/* Company Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<GenericPage />} />
            <Route path="/blog" element={<GenericPage />} />
            <Route path="/case-studies" element={<GenericPage />} />
            <Route path="/sustainability" element={<GenericPage />} />
            
            {/* Legal Pages */}
            <Route path="/terms" element={<GenericPage />} />
            <Route path="/privacy" element={<GenericPage />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;