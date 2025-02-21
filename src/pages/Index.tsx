
import React from 'react';
import { NotificationBanner } from '@/components/NotificationBanner';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Instructions } from '@/components/Instructions';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <Instructions />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
