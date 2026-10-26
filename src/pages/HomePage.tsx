import React from 'react';
import { BackgroundFlower3D } from '../components/home/BackgroundFlower3D';
import { Navbar } from '../components/layout/Navbar';
import { HeroParallax3D } from '../components/home/HeroParallax3D';
import { Catalog3DTiltGrid } from '../components/home/Catalog3DTiltGrid';
import { AppleCardsCarousel } from '../components/home/AppleCardsCarousel';
import { BoutiqueDeliveryMap } from '../components/home/BoutiqueDeliveryMap';
import { FuneralConfigurator } from '../components/home/FuneralConfigurator';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/home/CartDrawer';

interface HomePageProps {
  onNavigateToAdmin?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToAdmin }) => {
  return (
    <div className="min-h-screen bg-cream text-stone-800 font-sans antialiased overflow-x-hidden selection:bg-clay selection:text-white relative">
      {/* 1. Fullscreen Three.js 3D Blooming Pink Rose Background */}
      <BackgroundFlower3D />

      {/* 2. Top Navigation Bar with Dynamic Announcement */}
      <Navbar onNavigateToAdmin={onNavigateToAdmin} />

      {/* Main Page Sections */}
      <main className="relative z-10">
        {/* Atelier Hero Section */}
        <HeroParallax3D />

        {/* Creazioni Botaniche Catalog Grid */}
        <Catalog3DTiltGrid />

        {/* Exclusive Collections Showcase */}
        <AppleCardsCarousel />

        {/* Boutique in Via Nomentana 38, Tor Lupara & Delivery across Roma */}
        <BoutiqueDeliveryMap />

        {/* Arte Funebre & Cordoglio Configurator (Triggers Solemn Silver Lighting) */}
        <FuneralConfigurator />
      </main>

      {/* 3. Luxury Botanical Footer with Interactive Maps Window */}
      <Footer />

      {/* 4. Slide-over Shopping Cart Drawer */}
      <CartDrawer />
    </div>
  );
};
