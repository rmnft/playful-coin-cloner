
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white/60 text-sm">
          <p className="mb-4">
            FOLLOW OUR OFFICIAL{" "}
            <a href="#" className="text-primary hover:underline">X ACCOUNT</a>
            {" "}AND{" "}
            <a href="#" className="text-primary hover:underline">TELEGRAM CHANNEL</a>
            {" "}FOR UPDATES
          </p>
          <p className="mb-4">
            © 2025 CoinFast | All Rights Reserved | Support on Telegram{" "}
            <a href="#" className="text-primary hover:underline">@coinfastofficial</a>
            {" "}| <a href="#" className="text-primary hover:underline">Become an affiliate for CoinFast</a>
          </p>
          <p className="text-xs max-w-4xl mx-auto">
            CoinFast is a token creation platform that allows users to generate Solana-based tokens instantly, with no coding required. CoinFast does not issue, endorse, manage, or provide liquidity for any tokens created using our service...
          </p>
        </div>
      </div>
    </footer>
  );
};
