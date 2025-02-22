import React from 'react';
import { WalletConnect } from '@/components/WalletConnect';
import { TokenCreationForm } from '@/components/TokenCreationForm';
import { TokenCreationSteps } from '@/components/TokenCreationSteps';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Home, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreateToken = () => {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="animated-bg" />
      <div className="matrix-bg" />

      {/* Simple Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-end gap-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link 
            to="/liquidity" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Droplets className="w-5 h-5" />
            <span>Liquidity</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24">
        {!connected ? (
          // Centered Content
          <div className="max-w-5xl mx-auto mb-20 relative">
            {/* MemeAI Logo - Top left position */}
            <div className="absolute -left-64 top-24">
              <h1 className="text-6xl font-bold animated-text text-red-500" data-text="MemeAI">
                MemeAI
              </h1>
              <p className="text-gray-400 text-lg mt-2">
                AI-Powered Token Creation
              </p>
            </div>

            {/* Centered Rectangular Wallet Box */}
            <div 
              onClick={() => {
                const walletButton = document.querySelector('.wallet-adapter-button-trigger');
                if (walletButton instanceof HTMLElement) {
                  walletButton.click();
                }
              }}
              className="glass-card p-16 relative overflow-hidden w-[800px] mx-auto cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-red-500/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-6 animated-text mx-auto" data-text="Connect Your Wallet">
                  Connect Your Wallet
                </h2>
                <p className="text-gray-400 text-xl mb-12 mx-auto max-w-lg">
                  Please connect your wallet to create a new token
                </p>
                <div className="flex justify-center pointer-events-none">
                  <WalletConnect />
                </div>
              </div>
            </div>

            {/* Side Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* AI Features */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-red-500" />
                  AI-Powered Features
                </h3>
                <ul className="space-y-4 text-left">
                  <motion.li 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <ArrowRight className="w-5 h-5 text-red-500" />
                    <span>Smart contract optimization</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5 text-red-500" />
                    <span>Automated security checks</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-red-500" />
                    <span>Market trend analysis</span>
                  </motion.li>
                </ul>
              </div>

              {/* Token Preview */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Token Preview</h3>
                <div className="bg-black/30 rounded-lg p-6 font-mono text-sm text-left">
                  <p className="text-gray-400">
                    <span className="text-red-500">name:</span> {'{tokenName}'}<br />
                    <span className="text-red-500">symbol:</span> {'{tokenSymbol}'}<br />
                    <span className="text-red-500">supply:</span> {'{totalSupply}'}<br />
                    <span className="text-red-500">decimals:</span> {'{decimals}'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Token Creation Form when connected
          <div className="max-w-4xl mx-auto">
            <TokenCreationForm />
          </div>
        )}

        {/* Steps Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 animated-text" data-text="How It Works">
            How It Works
          </h2>
          <TokenCreationSteps />
        </section>

        {/* Additional Features */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 animated-text" data-text="Advanced Features">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Token Vesting</h3>
              <p className="text-gray-400">Set up automatic vesting schedules for team tokens and investors.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Anti-Bot Protection</h3>
              <p className="text-gray-400">Advanced measures to prevent bot manipulation during launch.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Liquidity Locking</h3>
              <p className="text-gray-400">Secure your token's liquidity with time-locked smart contracts.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateToken;
