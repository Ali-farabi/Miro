import { Header } from '../components/Header';
import Hero from '../components/Hero';
import TrustedBySection from '../components/TrustedBySection';
import FeaturesSection from '../components/FeaturesSection';
import WorkTogetherSection from '../components/WorkTogetherSection';
import IntegrationsSection from '../components/IntegrationsSection';
import TheWaysWeWorkSection from '../components/TheWaysWeWorkSection';
import BuiltForWorkSection from '../components/BuiltForWorkSection';
import BuiltForTeamsSection from '../components/BuiltForTeamsSection';
import WhyTrustMiroSection from '../components/WhyTrustMiroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
export default function MiroLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustedBySection />
       <FeaturesSection />
      <WorkTogetherSection />
      <IntegrationsSection />
        <TheWaysWeWorkSection />
       <BuiltForWorkSection />
      <BuiltForTeamsSection />
      <WhyTrustMiroSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}