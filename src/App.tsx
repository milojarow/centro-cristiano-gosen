import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceTimes } from './components/ServiceTimes';
import { HeartMessage } from './components/HeartMessage';
import { PastorWelcome } from './components/PastorWelcome';
import { Ministries } from './components/Ministries';
import { Events } from './components/Events';
import { Testimonies } from './components/Testimonies';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceTimes />
        <HeartMessage />
        <PastorWelcome />
        <Ministries />
        <Events />
        <Testimonies />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>;
}