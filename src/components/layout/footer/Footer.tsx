import { FooterColumn } from './FooterColumn';
import { FooterLink } from './FooterLink';
import { NewsletterForm } from './NewsletterForm';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 font-montserrat">Join Us, And Become A Subscriber!</h2>
            <p className="text-gray-300 mb-4 font-montserrat">
            We connect you with the latest trends in all your favorite products, all in one convenient place. 
            Subscribe to us for exclusive offers, and deals!
            </p>
          </div>

          <div className="font-montserrat">
            <FooterColumn title="Sign Up!">
              <div className="text-gray-300 mb-4">
                <NewsletterForm />
              </div>
            </FooterColumn>
          </div>

          <FooterColumn title="Products">
            <FooterLink to="/featured">All Products</FooterLink>
            <FooterLink to="/best-selling">Best Selling</FooterLink>
            <FooterLink to="/our-favorites">Our Favorites</FooterLink>
            <FooterLink to="/sale">Sale</FooterLink>
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/faqs">FAQs</FooterLink>
            <FooterLink to="/teams">Team</FooterLink>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 All Rights Reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Use</FooterLink>
              <FooterLink to="/refunds">Sales and Refunds</FooterLink>
              <FooterLink to="/legal">Legal</FooterLink>
              <FooterLink to="/sitemap">Site Map</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};