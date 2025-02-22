
import React from 'react';
import { TokenCreationForm } from '@/components/TokenCreationForm';
import { NotificationBanner } from '@/components/NotificationBanner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const CreateToken = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <TokenCreationForm />
      </main>
      <Footer />
    </div>
  );
};

export default CreateToken;
