import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <ThemeProvider>
        <body
          className={`
          ${inter.className}
          bg-white dark:bg-black
          text-black dark:text-white
          transition-colors duration-300
          min-h-screen
        `}
        >
          <Navbar />
          <main className="pt-24">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
