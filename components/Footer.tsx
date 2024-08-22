// components/ui/Footer.tsx
export function Footer() {
    return (
      <footer className="w-full py-4 bg-background text-foreground text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Buena. All rights reserved.
        </p>
      </footer>
    );
  }