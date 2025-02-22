import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Zap } from 'lucide-react';

interface Feature {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'AI-Powered Creation',
    description: 'Advanced algorithms generate unique and viral-ready token designs.',
  },
  {
    icon: Shield,
    title: 'Secure Smart Contracts',
    description: 'Battle-tested contracts with built-in security features.',
  },
  {
    icon: Zap,
    title: 'Advanced Dashboard',
    description: 'Complete metrics dashboard with real-time token analytics and launch tracking.',
  },
  {
    icon: Rocket,
    title: 'Launch Tools',
    description: 'Complete suite of tools for a successful token launch.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Feature: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      variants={itemVariants}
      className="glass-card p-6 relative group cursor-pointer"
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      
      {/* Icon */}
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-400">
        {feature.description}
      </p>
      
      {/* Animated border */}
      <div className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/50 transition-colors duration-300 rounded-lg" />
    </motion.div>
  );
};

export const AnimatedFeatures: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {features.map((feature, index) => (
        <Feature key={index} feature={feature} index={index} />
      ))}
    </motion.div>
  );
};

export default AnimatedFeatures;
