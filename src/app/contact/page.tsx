import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <div className="pt-20 md:pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
