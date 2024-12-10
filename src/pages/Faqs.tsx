import { FaqItem } from '../components/faqs/FaqItem';

export const Faqs = () => {
  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment partners.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on the destination. Express shipping options are available at checkout.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Return shipping costs are covered for defective items.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can calculate shipping costs at checkout.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account on our website.',
    },
    {
      question: 'Are my payment details secure?',
      answer: 'Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers.',
    },
    {
      question: 'Do you offer price matching?',
      answer: 'Yes, we offer price matching for identical items sold by major retailers. Contact our customer service team with proof of the lower price.',
    },
    {
      question: 'What is your warranty policy?',
      answer: 'Warranty coverage varies by product. Most items come with a standard manufacturer\'s warranty. Extended warranty options are available for select products.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our products and services.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for?
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};