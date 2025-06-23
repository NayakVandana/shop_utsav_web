import GuestHomePage from "@/ui/guest/Home/HomePage";
;
import guest from "@/utils/guest";
import { isLoggedin } from "@/utils/isLoggedin";

import { redirect } from "next/navigation";
import { Metadata } from "next";
const assets_url = `${process.env.ASSETS_URL}`;

export async function generateMetadata(): Promise<Metadata> {
  let title = "Utsav";
 const description = "Buy Online at Best Price – Utsav.";

  let category = "E-Commerce";
  let keywords = "E-Commerce,Marketplace";
  let url = process.env.NEXTAUTH_URL;
  return {
    metadataBase: new URL(process.env.NEXTAUTH_URL),
    title,
    description,
    keywords,
    category,
    applicationName: "Utsav",
    robots: url,
    manifest: url,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      url: process.env.NEXTAUTH_URL,
      description,
   
      siteName: "Utsav",
    },
    twitter: {
      site: "Utsav",
      title,
      description,
     
      card: "overview",
    },
  };
}

async function Home() {
  return (
    <>
      <GuestHomePage />
    </>
  );
}
export default guest(Home);
