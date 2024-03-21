import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday",
  description:
    "MakeMyTrip is India's leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
      />
      <meta
        name="keywords"
        content="India travel, travel in India, cheap air tickets, cheap flights, flight, hotels, hotel, holidays, bus tickets, air travel, air tickets, holiday packages, travel packages, railways, trains, rail, MakeMyTrip India"
      ></meta>
      <meta http-equiv="cache-control" content="max-age=0" />
      <meta http-equiv="cache-control" content="no-cache" />
      <meta http-equiv="expires" content="0" />
      <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
      <meta http-equiv="pragma" content="no-cache" />
      <meta name="application-name" content="MakeMyTrip" />
      <meta name="theme-color" content="#FFF" />
      <meta name="msapplication-navbutton-color" content="#4a4a4a" />
      <meta name="msapplication-starturl" content="/"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
