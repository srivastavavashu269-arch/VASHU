import type { ReactNode } from 'react';
import './globals.css';

export const metadata = { title: 'Showstopper-AI', description: 'AI workforce platform' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
