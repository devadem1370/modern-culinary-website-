"use client"
import React from 'react';
import Image from 'next/image';

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion = ({ title, content, isOpen, onToggle }: AccordionProps) => {
  return (
    <div className="bg-white/10  py-8 px-10 rounded-2xl border border-white/20 backdrop-blur-[20px]">
      <button
        className="w-full  flex items-center justify-between text-left"
        onClick={onToggle}
      >
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <Image 
            src="/icons/chevron-down.svg" 
            alt="Toggle" 
            width={24} 
            height={24}
            className="opacity-60"
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="p-base mt-5">{content}</p>
      </div>
    </div>
  );
};

export default Accordion; 