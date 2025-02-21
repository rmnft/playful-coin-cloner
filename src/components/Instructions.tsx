
import React from 'react';

const steps = [
  "Connect your Solana wallet.",
  "Write the name you want for your Token.",
  "Indicate the symbol (max 8 characters).",
  "Select the decimals quantity (0 for Whitelist Token, 6 for utility token).",
  "Write the description you want for your SPL Token.",
  "Upload the image for your token (PNG).",
  "Put the supply of your Token.",
  "Click on Create, accept the transaction, and wait until your token is ready."
];

export const Instructions = () => {
  return (
    <div className="glass-card p-8 mx-4 md:mx-auto max-w-4xl mb-12">
      <h2 className="text-2xl font-bold mb-6 gradient-text">
        How to use Solana Token Creator
      </h2>
      <div className="space-y-4">
        <p className="font-medium mb-4">Follow these simple steps:</p>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-primary font-bold">{index + 1}.</span>
              <p className="text-white/80">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-white/80">
            The cost of creating the Token is <span className="text-primary">0.1 SOL</span>, which includes all fees needed for the SPL Token creation.
          </p>
          <p className="text-white/80 mt-4">
            The creation process will start and will take some seconds. After that, you will receive the total supply of the token in the wallet you chose.
          </p>
        </div>
      </div>
    </div>
  );
};
