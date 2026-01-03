import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBySection from '../components/TrustedBySection';

export default function MiroLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustedBySection />
    </div>
  );
}