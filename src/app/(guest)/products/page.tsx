import Products from "@/ui/guest/Products/Products";
import apiCall from "@/utils/apiCall";
import { handleResponse } from "@/utils/common";
import guest from "@/utils/guest";
import { Metadata } from "next";
const assets_url = `${process.env.ASSETS_URL}`;

export async function generateMetadata(): Promise<Metadata> {
const title = "Explore Products - Utsav";
const description = "Buy Online at Best Price – Utsav";
const category = "E-Commerce,Marketplace";;
const keywords = "Buy Online at Best Price – Utsav";
let images = assets_url + "/images/Homepage/company_search.png";

  return {
    metadataBase: new URL('http://localhost:3000'),
    title,
    description,
    keywords,
    category,
    applicationName: "Utsav",
    robots: process.env.NEXTAUTH_URL,
    manifest: process.env.NEXTAUTH_URL,
    openGraph: {
      title,
      url: process.env.NEXTAUTH_URL,
      description,
      images: images,
      siteName: "Utsav",
    },
    twitter: {
      site: "Utsav",
      title,
      description,
      images: images,
      card: "secure",
    },
  };
}

async function getData() {
  const res = await apiCall("/products").then((res) => handleResponse(res));
  return res?.data;
}

async function faqs() {
  const data = await getData();
  return (
    <>
      <Products data={data || []} />
    </>
  );
}
export default guest(faqs);
