import { HeroBanner } from '../components/home/HeroBanner';
import { DealsSection } from '../components/home/DealsSection';
import { CategoryHighlights } from '../components/home/CategoryHighlights';
import { LimitedDropsSection } from '../components/home/LimitedDropsSection'; 
import { KeyPagesSection } from '../components/home/KeyPagesSection';

export const Home = () => {
  return (
    <div>
      <HeroBanner />
      <DealsSection />
      <CategoryHighlights />
      <LimitedDropsSection />
      <KeyPagesSection />
    </div>
  );
}