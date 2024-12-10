import limitedDropBg from '../../assets/images/limited_drop_promo-phase_3_d.png';
import { Link } from 'react-router-dom';

export const LimitedDropsSection = () => {
  return (
    <div className="flex justify-center py-10">
      <section
        className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg p-8 flex items-center justify-between shadow-lg w-full max-w-5xl h-64 overflow-hidden"
      >        <div className="max-w-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Limited Drops</h2>
          <p className="text-gray-600 mb-4">
            Don't let sold out happen to you. Limited items drop periodically — sign up for updates!
          </p>
          <button className="bg-[#153A5B] text-white px-6 py-3 rounded-full hover:bg-[#20517c]">
            <Link
              to="/sale"
            >
              Check it out →
            </Link>
          </button>
        </div>
        <div className="flex-1 flex justify-center overflow-hidden">
          <img
            src={limitedDropBg}
            alt="Limited Drops"
            className="w-full max-w-md object-cover"
          />
        </div>
      </section>
    </div>
  );
};
