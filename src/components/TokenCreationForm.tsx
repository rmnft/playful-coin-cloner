
import React, { useState } from 'react';
import { Button } from './ui/button';
import { TokenBasicInfo } from './TokenSteps/TokenBasicInfo';
import { TokenSupplyInfo } from './TokenSteps/TokenSupplyInfo';
import { TokenAdditionalInfo } from './TokenSteps/TokenAdditionalInfo';
import { Wallet } from 'lucide-react';

type Step = 1 | 2 | 3;

export const TokenCreationForm = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    logoUrl: '',
    decimals: 9,
    totalSupply: 1000000000,
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    discord: '',
    creatorName: 'CoinFast',
    creatorWebsite: 'https://coinfast.fun',
    revokeFreeze: true,
    revokeMint: true,
    revokeUpdate: true,
  });

  const handleWalletConnect = () => {
    // TODO: Implement actual wallet connection logic
    setIsWalletConnected(true);
  };

  const handleStepComplete = (stepData: Partial<typeof formData>) => {
    setFormData({ ...formData, ...stepData });
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev === 3 ? prev : (prev + 1) as Step));
    }
  };

  if (!isWalletConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <h1 className="text-3xl font-bold text-center">Create Your Token</h1>
        <p className="text-center text-gray-600">Connect your wallet to get started</p>
        <Button onClick={handleWalletConnect} size="lg" className="gap-2">
          <Wallet />
          Select Wallet
        </Button>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <TokenBasicInfo
            data={formData}
            onComplete={handleStepComplete}
          />
        );
      case 2:
        return (
          <TokenSupplyInfo
            data={formData}
            onComplete={handleStepComplete}
            onBack={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <TokenAdditionalInfo
            data={formData}
            onComplete={handleStepComplete}
            onBack={() => setCurrentStep(2)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Create Your Token</h1>
        <div className="flex justify-center items-center gap-4 mt-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-3 h-3 rounded-full ${
                step === currentStep
                  ? 'bg-primary'
                  : step < currentStep
                  ? 'bg-gray-400'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
      {renderStep()}
    </div>
  );
};
