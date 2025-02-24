
import React from 'react';
import { WalletConnect } from './WalletConnect';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Create Your Own Token <span className="gradient-text">FAST</span>
      </h1>
      <p className="text-xl text-white/80 mb-10 max-w-2xl">
        Launch your own token on Solana in seconds. No coding required.
      </p>
      <WalletConnect />
    </div>
  );
};
