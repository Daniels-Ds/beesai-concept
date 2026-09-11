import './globals.css';
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Beesai — Контент за пыльцу',
  description: 'Генерируйте изображения, видео и аудио с помощью 400+ AI-моделей — Flux, Midjourney, Kling, Veo, Seedance и другие — в одном улье.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
