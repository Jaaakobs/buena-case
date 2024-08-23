'use client';

import Link from 'next/link';
import { ChevronRightIcon, ArrowRightIcon, BuildingIcon, KeyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { useRef } from 'react';

export default function HomePage() {
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <main className="flex flex-col items-center mt-24 w-full px-4 max-w-[800px]">
        <h1 className="text-5xl font-bold text-center mb-2 text-primary">Available Across Germany.</h1>
        <p className="text-lg text-muted-foreground text-center mb-6">
          Discover your dream apartment with ease. Start your journey today.
        </p>
        <div className="flex space-x-4">
          <Link href="/application/1" passHref>
            <Button variant="default" className="px-6 py-3">
              Start Application
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button variant="secondary" className="px-6 py-3" onClick={scrollToHowItWorks}>
            How it Works
          </Button>
        </div>

        {/* Embedded Video */}
        <div className="w-full mt-12">
          <video controls className="w-full rounded-lg">
            <source src="/images/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>

      <div className="pt-20 pb-20 w-full px-4" ref={howItWorksRef}>
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <ArrowRightIcon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Apply</h3>
            <p className="text-muted-foreground mt-2">Start your application to make your dream of finding the perfect apartment a reality.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BuildingIcon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Find Your Dream Apartment</h3>
            <p className="text-muted-foreground mt-2">Browse our extensive selection of available apartments across Germany.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <KeyIcon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Move In</h3>
            <p className="text-muted-foreground mt-2">Once you find your dream apartment, move in effortlessly.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}