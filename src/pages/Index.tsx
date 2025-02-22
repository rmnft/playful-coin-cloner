import React from 'react';
import { Link } from "react-router-dom";
import { WalletConnect } from "@/components/WalletConnect";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coins, Shield, Zap, Menu, Brain, Sparkles, Check, Rocket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import AnimatedStats from "@/components/AnimatedStats";
import TokenPreview3D from "@/components/TokenPreview3D";
import { motion } from "framer-motion";

const Index = () => {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Create Token", href: "/create-token" },
    { name: "Documentation", href: "/docs" },
    { name: "About", href: "/about" },
  ];

  const steps = [
    {
      title: "Connect Wallet",
      description: "Connect your Solana wallet to get started with token creation",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Basic Information",
      description: "Enter your token's name, symbol, and upload a logo",
      icon: <Coins className="w-6 h-6" />,
    },
    {
      title: "Token Supply",
      description: "Set the initial supply and maximum supply for your token",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const features = [
    {
      title: "AI-Powered Creation",
      description: "Leverage artificial intelligence to optimize your token parameters",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Smart Contracts",
      description: "Advanced smart contract generation with built-in security features",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Meme Integration",
      description: "Built-in meme generation and social media integration",
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      question: "What makes MemeAI different?",
      answer: "MemeAI combines artificial intelligence with meme culture to create unique and engaging tokens. Our platform uses advanced algorithms to optimize your token's parameters and generate viral-ready meme content.",
    },
    {
      question: "How much does it cost to create a token?",
      answer: "Creating a token on Solana requires a small amount of SOL to pay for the transaction fees. The exact amount varies but is typically less than 1 SOL.",
    },
    {
      question: "Can I modify my token after creation?",
      answer: "Some token properties can be modified if you set up updateable properties during creation. However, certain properties like the token's supply type (fixed or unlimited) cannot be changed after creation.",
    },
    {
      question: "What wallets are supported?",
      answer: "We support popular Solana wallets including Phantom, Solflare, and other Solana-compatible wallets that implement the wallet adapter standard.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="animated-bg" />
      <div className="matrix-bg" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold animated-text" data-text="MemeAI">
              MemeAI
            </h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-white hover-glow transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <WalletConnect />
            
            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger className="md:hidden">
                <Menu className="w-6 h-6 text-gray-300" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 border-white/5">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-gray-300 hover:text-white hover-glow transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block">
            <h2 className="text-6xl font-bold mb-6 animated-text" data-text="AI-Powered Meme Tokens">
              AI-Powered Meme Tokens
              <span className="absolute -top-4 -right-4 text-red-500 sparkle">
                <Sparkles className="w-8 h-8" />
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Create viral-ready tokens on Solana with the power of artificial intelligence.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/create-token">
              <Button className="glow-effect bg-gradient-primary text-white px-8 py-6 rounded-full text-lg group transition-all duration-300">
                Create Token
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animated-text" data-text="Why Choose MemeAI?">
            Why Choose MemeAI?
          </h2>
          <AnimatedFeatures />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animated-text" data-text="Our Impact">
            Our Impact
          </h2>
          <AnimatedStats />
        </div>
      </section>

      {/* Token Preview Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-black/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 animated-text" data-text="Create Your Token">
                Create Your Token
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Experience the future of token creation with our AI-powered platform. 
                Design, deploy, and launch your meme token in minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300">Instant Token Generation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300">Customizable Parameters</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300">Advanced Liquidity Management</span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/create-token">
                  <Button className="glow-effect bg-gradient-primary text-white px-8 py-4 rounded-full text-lg">
                    Start Creating
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <TokenPreview3D />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with enhanced animations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 animated-text" data-text="Frequently Asked Questions">
            Frequently Asked Questions
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mb-4"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`faq-${index}`} className="glass-card border-none">
                    <AccordionTrigger className="px-6 py-4 text-white hover:text-red-500 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <div className="glass-card p-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6 animated-text" data-text="Ready to Create Your Token?">
              Ready to Create Your Token?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful creators who have launched their tokens with MemeAI.
            </p>
            <Link to="/create-token">
              <Button className="glow-effect bg-gradient-primary text-white px-8 py-6 rounded-full text-lg group">
                Launch Your Token Now
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="container mx-auto text-center text-gray-400">
          <p> 2025 MemeAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
