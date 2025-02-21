
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Solana, and why should I launch my token on it?",
    answer: "Solana is a high-performance blockchain platform known for its fast transactions and low fees..."
  },
  {
    question: "How can I create a token on the Solana blockchain?",
    answer: "Creating a token on Solana is simple with CoinFast. Just connect your wallet and follow our step-by-step process..."
  },
  {
    question: "What are the steps to deploy my own token on Solana?",
    answer: "The process is straightforward: connect wallet, enter token details, pay the fee, and receive your tokens..."
  },
  {
    question: "How can I manage token authorities on Solana?",
    answer: "Token authorities on Solana can be managed through your wallet and various Solana tools..."
  },
  {
    question: "What platforms can assist with launching a token on Solana?",
    answer: "CoinFast is your primary solution for easy token creation. There are also other platforms..."
  }
];

export const FAQ = () => {
  return (
    <div className="glass-card p-8 mx-4 md:mx-auto max-w-4xl mb-12">
      <h2 className="text-2xl font-bold mb-6 gradient-text">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left hover:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
