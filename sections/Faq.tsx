"use client"
import React, { useState } from 'react';
import Accordion from '@/components/Accordion';

const faqItems = [
  {
    title: "How do I create my own recipe?",
    content: "You can create your own recipe by using our interactive recipe builder. Simply select ingredients, follow the step-by-step guide, and customize according to your preferences. Our system will provide real-time suggestions and nutritional information."
  },
  {
    title: "What makes Savory different from other recipe platforms?",
    content: "Savory combines modern culinary techniques with user-friendly features. We offer personalized recipe recommendations, nutritional guidance, and a collaborative community of food enthusiasts. Our platform also includes unique features like interactive recipe building and professional food photography services."
  },
  {
    title: "Can I get help with meal planning?",
    content: "Yes! Savory offers comprehensive meal planning assistance. Our system helps you create balanced weekly meal plans, generates shopping lists, and even suggests recipes based on your dietary preferences and available ingredients."
  },
  {
    title: "Do you offer dietary restriction options?",
    content: "Absolutely! Our platform caters to various dietary needs including vegetarian, vegan, gluten-free, keto, and more. You can filter recipes based on your dietary requirements and receive customized recommendations."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className='flex w-full mt-[100px] mb-[100px]'>
      <div className="left w-1/2 pr-12">
        <h2 className="heading-xl mb-12">Frequently Asked Questions</h2>
        <p className="p-base">Find answers to common questions about our culinary platform and services. If you need additional help, feel free to contact our support team.</p>
      </div>
      <div className="right w-1/2 space-y-8">
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </main>
  );
};

export default Faq;