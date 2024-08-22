'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';
  const isInApplicationFlow = pathname.startsWith('/application');

  return (
    <header className="flex justify-between w-full px-8 py-4 fixed top-0 bg-white z-50"> {/* Removed shadow */}
      <div className="text-2xl font-bold">Buena</div>
      {isHomePage && (
        <Link href="/application/1" passHref>
          <Button>
            Start Application <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      )}
      {isInApplicationFlow && (
        <Link href="/" passHref>
          <Button variant="ghost">
            Exit
          </Button>
        </Link>
      )}
    </header>
  );
}