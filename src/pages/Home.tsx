import { HeroBanner } from '../components/home/HeroBanner';
import { DealsSection } from '../components/home/DealsSection';
import { CategoryHighlights } from '../components/home/CategoryHighlights';

export const Home = () => {
    return (
        <div>
            <HeroBanner />
            <DealsSection />
            <CategoryHighlights />
        </div>
    );
}
