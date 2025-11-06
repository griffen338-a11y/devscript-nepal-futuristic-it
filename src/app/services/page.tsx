import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <div className="pt-20 md:pt-24">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}
