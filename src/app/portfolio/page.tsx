import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <div className="pt-20 md:pt-24">
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  );
}
