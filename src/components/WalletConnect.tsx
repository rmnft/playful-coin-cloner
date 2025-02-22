
import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from './ui/button';
import { Wallet } from 'lucide-react';

export const WalletConnect: FC = () => {
  const { wallet, connecting } = useWallet();

  if (connecting) {
    return (
      <Button disabled className="bg-primary text-white rounded-full px-6 opacity-80">
        Connecting...
      </Button>
    );
  }

  return <WalletMultiButton className="wallet-adapter-button-trigger bg-gradient-primary text-white rounded-full px-6" />;
};
