import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What can I cook in the Gantham Electric Rice Cooker?",
      answer: "You can cook a variety of grains including white rice, brown rice, oats, and quinoa with ease."
    },
    {
      question: "How much of each grain can I cook in the Gantham Electric Rice Cooker?",
      answer: "The cooker supports different quantities depending on the grain type; please refer to the user manual for details."
    },
    {
      question: "How do I know when the grains are finished cooking?",
      answer: "The cooker automatically switches to keep warm mode once cooking is complete."
    },
    {
      question: "Do you have any advanced products?",
      answer: "Yes, we offer an advanced model called Oryza with enhanced features."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1 className="faq-heading">Gantham Electric Rice Cooker FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleFAQ(index)} className="faq-question">
            {faq.question}
            <span className="faq-toggle-icon">{openIndex === index ? '−' : '+'}</span>
          </h3>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
