import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SessionProvider from '@/components/providers/SessionProvider';
import ConditionalLayout from '@/components/ConditionalLayout';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: "MediCare - Healthcare Management System",
  description: "Comprehensive healthcare management system with patient care, appointments, and medical services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
