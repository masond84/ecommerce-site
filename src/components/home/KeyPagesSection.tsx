import { Link } from 'react-router-dom';

import headphonesImage from '../../assets/images/headphones.jpg';
import jewleryImage from '../../assets/images/jewlery.jpg';
import clothingImage from '../../assets/images/clothing.jpg';

export const KeyPagesSection = () => {
  const keyPages = [
    {
      image: headphonesImage,
      title: 'Electronics',
      link: '/featured',
    },
    {
      image: jewleryImage,
      title: 'Accessories',
      link: '/featured',
    },
    {
      image: clothingImage,
      title: 'Clothing',
      link: '/featured',
    },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {keyPages.map((page, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-transform"
          >
            <img src={page.image} alt={page.title} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{page.title}</h3>
              <Link
                to={page.link}
                className="text-blue-600 hover:underline"
              >
                Shop now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
