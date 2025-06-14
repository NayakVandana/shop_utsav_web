import FAQs from "@/ui/guest/FAQs/FAQs";
import Products from "@/ui/guest/Products/Products";
import apiCall from "@/utils/apiCall";
import { handleResponse } from "@/utils/common";
import guest from "@/utils/guest";
import { Metadata } from "next";
const assets_url = `${process.env.ASSETS_URL}`;

export async function generateMetadata(): Promise<Metadata> {
  let title = "Products";
  let description = "LegAn: Connect with verified buyers and sellers for secure credit transactions. Trust our network for safe and reliable business interactions";
  let images = assets_url + "/images/Homepage/company_search.png";
  let category = "Financial";
  let keywords = "Secure credit transactions";

  return {
    metadataBase: new URL('http://localhost:3000'),
    title,
    description,
    keywords,
    category,
    applicationName: "LegAn",
    robots: process.env.NEXTAUTH_URL,
    manifest: process.env.NEXTAUTH_URL,
    openGraph: {
      title,
      url: process.env.NEXTAUTH_URL,
      description,
      images: images,
      siteName: "LegAn",
    },
    twitter: {
      site: "LegAn",
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
