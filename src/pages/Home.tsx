import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Industries from '../components/Industries';
import WorkPreview from '../components/WorkPreview';
import Method from '../components/Method';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Founder from '../components/Founder';
import Faq from '../components/Faq';
import Cta from '../components/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Problem />
      <Services />
      <Industries />
      <WorkPreview />
      <Method />
      <WhyUs />
      <Testimonials />
      <Founder />
      <Faq />
      <Cta />
    </main>
  );
}
