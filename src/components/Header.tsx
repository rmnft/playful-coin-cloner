
import React from 'react';
import { WalletConnect } from './WalletConnect';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold gradient-text">
        <Link to="/">CoinFast</Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/create-token" className="text-white/80 hover:text-white transition-colors">
          Create Token
        </Link>
        <Link to="#" className="text-white/80 hover:text-white transition-colors">
          Create Liquidity
        </Link>
        <WalletConnect />
      </nav>
    </header>
  );
};
