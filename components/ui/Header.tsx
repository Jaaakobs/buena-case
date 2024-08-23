'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { HamburgerMenu } from '@/components/hamburger-menu';

export function Header() {
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';
  const isInApplicationFlow = pathname.startsWith('/application');

  return (
    <header className="flex justify-between w-full px-8 py-4 fixed top-0 bg-background z-50">
      <div className="text-2xl font-bold">Buena</div>
      <div className="flex items-center space-x-4">
        {isHomePage && (
          <Link href="/application/1" passHref>
            <Button>
              Start Application <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
        {isInApplicationFlow && (
          <HamburgerMenu />
        )}
      </div>
    </header>
  );
}