
import React from 'react';
import { WalletConnect } from '@/components/WalletConnect';
import { Button } from '@/components/ui/button';
import { useWallet } from '@solana/wallet-adapter-react';
import { ArrowLeftRight, ArrowRight, Home, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Liquidity = () => {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="animated-bg" />
      <div className="matrix-bg" />

      {/* Navigation */}
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
            to="/create-token" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Coins className="w-5 h-5" />
            <span>Create Token</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24">
        {!connected ? (
          // Wallet Connection View
          <div className="max-w-5xl mx-auto mb-20 relative">
            <div className="absolute -left-64 top-24">
              <h1 className="text-6xl font-bold animated-text text-red-500" data-text="MemeAI">
                MemeAI
              </h1>
              <p className="text-gray-400 text-lg mt-2">
                Liquidity Pool Creation
              </p>
            </div>

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
                  <ArrowLeftRight className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-6 animated-text mx-auto" data-text="Connect Your Wallet">
                  Connect Your Wallet
                </h2>
                <p className="text-gray-400 text-xl mb-12 mx-auto max-w-lg">
                  Please connect your wallet to add liquidity
                </p>
                <div className="flex justify-center pointer-events-none">
                  <WalletConnect />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Liquidity Pool Creation Form
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-black/40 backdrop-blur border-white/10">
              <h2 className="text-3xl font-bold mb-8 text-center">Create Liquidity Pool</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Token Amount</Label>
                    <Input 
                      type="number" 
                      placeholder="Enter token amount" 
                      className="bg-black/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>SOL Amount</Label>
                    <Input 
                      type="number" 
                      placeholder="Enter SOL amount" 
                      className="bg-black/20"
                    />
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <ArrowLeftRight className="mr-2" />
                  Create Liquidity Pool
                </Button>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="p-6 bg-black/20 border-white/5">
                  <h3 className="text-lg font-semibold mb-2">Pool Share</h3>
                  <p className="text-3xl font-bold text-red-500">0%</p>
                </Card>
                <Card className="p-6 bg-black/20 border-white/5">
                  <h3 className="text-lg font-semibold mb-2">Exchange Rate</h3>
                  <p className="text-3xl font-bold text-red-500">1 SOL = 0 Token</p>
                </Card>
              </div>
            </Card>
          </div>
        )}

        {/* Features Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 animated-text" data-text="Features">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Instant Liquidity</h3>
              <p className="text-gray-400">Create a liquidity pool for your token in seconds.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Low Fees</h3>
              <p className="text-gray-400">Competitive fees for liquidity providers.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Auto-Yield</h3>
              <p className="text-gray-400">Earn fees from trades automatically.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Liquidity;
