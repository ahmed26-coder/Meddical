import type { Metadata } from "next";
import { Geist, Geist_Mono, Yeseva_One } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yesevaOne = Yeseva_One({
  variable: "--font-yeseva-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Meddical",
  description: "Meddical - Revolutionizing Healthcare for a Better Tomorrow Meddical is an innovative healthcare platform designed to simplify access to top medical professionals and trusted health services. With a seamless booking system, expert consultations, and valuable health resources, we empower individuals to take control of their well-being with confidence. Why Choose Meddical? ✔ Effortless Appointment Scheduling – Book with top doctors in just a few clicks. ✔ Reliable Medical Consultations – Get expert advice anytime, anywhere. ✔ Comprehensive Health Resources – Stay informed with expert articles and tips. ✔ Seamless Doctor-Patient Communication – Connect directly with healthcare professionals. At Meddical, we believe in making quality healthcare accessible to everyone. Your health, our commitment! 💙✨",
  icons:{
    icon:"/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${yesevaOne.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
