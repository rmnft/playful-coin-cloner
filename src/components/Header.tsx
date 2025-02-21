
import React from 'react';
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold gradient-text">
        CoinFast
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-white/80 hover:text-white transition-colors">Create Token</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Create Liquidity</a>
        <Button className="button-gradient text-white rounded-full px-6">
          Select Wallet
        </Button>
      </nav>
    </header>
  );
};
