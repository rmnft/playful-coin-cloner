import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from './ui/button';
import { Wallet } from 'lucide-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css';

export const WalletConnect: FC = () => {
  const { wallet, connecting } = useWallet();
  const { connecting: connectingModal } = useWalletModal();

  if (connecting || connectingModal) {
    return (
      <div className="flex justify-center">
        <Button disabled className="
          !bg-red-500 
          !min-w-[500px] !h-28 
          !text-4xl !font-bold 
          !rounded-2xl
          !shadow-lg !shadow-red-500/20
        ">
          <Wallet className="w-8 h-8 mr-4" />
          Connecting...
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <WalletMultiButton className="
        !bg-red-500 hover:!bg-red-600 
        !min-w-[500px] !h-28 
        !text-4xl !font-bold
        !rounded-2xl
        !shadow-lg !shadow-red-500/20
        !transition-all hover:!scale-105
        !animate-pulse hover:!animate-none
      " />
    </div>
  );
};
