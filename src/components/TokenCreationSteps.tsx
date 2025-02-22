import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Settings, Coins, LineChart, Rocket, Lock } from 'lucide-react';

interface Step {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Connect your Solana wallet to get started with token creation.',
  },
  {
    icon: Settings,
    title: 'Basic Configuration',
    description: 'Set your token name, symbol, and description.',
  },
  {
    icon: Coins,
    title: 'Supply Settings',
    description: 'Configure total supply and token decimals.',
  },
  {
    icon: Lock,
    title: 'Security Features',
    description: 'Set up ownership, minting rights, and token locks.',
  },
  {
    icon: LineChart,
    title: 'Liquidity Setup',
    description: 'Configure initial liquidity and trading parameters.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Review all settings and deploy your token to the network.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const TokenCreationSteps: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-6 relative group"
          >
            <div className="absolute top-4 right-4 text-red-500/30 font-bold text-4xl">
              {(index + 1).toString().padStart(2, '0')}
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
            
            {/* Animated border */}
            <div className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/50 transition-colors duration-300 rounded-lg" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TokenCreationSteps;
