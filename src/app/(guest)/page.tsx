import GuestHomePage from "@/ui/guest/Home/HomePage";
;
import guest from "@/utils/guest";
import { isLoggedin } from "@/utils/isLoggedin";

import { redirect } from "next/navigation";
import { Metadata } from "next";
const assets_url = `${process.env.ASSETS_URL}`;

export async function generateMetadata(): Promise<Metadata> {
  let title = "LegAn";
  let description = "LegAn: Elevate financial control.Send bill, automate reminders, and track transactions seamlessly.Reliable credit management solution.";

  let category = "Business";
  let keywords = "Credit and debit management";
  let url = process.env.NEXTAUTH_URL;
  return {
    metadataBase: new URL(process.env.NEXTAUTH_URL),
    title,
    description,
    keywords,
    category,
    applicationName: "LegAn",
    robots: url,
    manifest: url,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      url: process.env.NEXTAUTH_URL,
      description,
   
      siteName: "LegAn",
    },
    twitter: {
      site: "LegAn",
      title,
      description,
     
      card: "overview",
    },
  };
}

async function Home() {
  // let isLogin = await isLoggedin();

  // if (isLogin) {
  //   redirect("/dashboard");
  // }

  return (
    <>
      <GuestHomePage />
    </>
  );
}
export default guest(Home);
