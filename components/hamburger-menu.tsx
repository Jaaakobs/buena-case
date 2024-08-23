'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, LogOut, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 transform" />
        ) : (
          <Menu className="h-6 w-6 transition-transform duration-300 transform" />
        )}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 mt-2 w-48 bg-background shadow-lg rounded-lg p-4"
          >
            <Button
              variant="ghost"
              className="w-full text-left flex items-center"
              onClick={() => {
                toggleMenu();
                router.push('/');
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Exit
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left flex items-center"
              onClick={() => {
                toggleMenu();
                // Toggle theme
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
            >
              {theme === 'dark' ? (
                <Sun className="mr-2 h-4 w-4" />
              ) : (
                <Moon className="mr-2 h-4 w-4" />
              )}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left flex items-center"
              onClick={() => {
                toggleMenu();
                // Logic to change the language can be added here
              }}
            >
              <Globe className="mr-2 h-4 w-4" />
              German
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}