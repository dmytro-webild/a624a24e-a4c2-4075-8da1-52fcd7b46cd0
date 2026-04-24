import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Bite&Bottle | Online Restaurant Reservation & Delivery',
  description: 'Bite&Bottle Kigali: Reserve tables instantly and order your favorite signature cuisine online. Fast delivery, secure payments, and premium dining quality.',
  keywords: ["restaurant kigali, food delivery kigali, table reservation kigali, fine dining kigali, mobile money food order"],
  openGraph: {
    "title": "Bite&Bottle | Dine Exceptional",
    "description": "Order, reserve, dine. The ultimate Kigali dining experience.",
    "siteName": "Bite&Bottle",
    "type": "website"
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
