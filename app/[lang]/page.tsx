import Image from "next/image";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Hero from "./components/Hero";
import Header from "./components/Header";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <div className="flex flex-col w-full bg-white relative">
      <Header content={dictionary} lang={lang} />
      <Hero content={dictionary} />
      <Partners content={dictionary} />
      <Footer content={dictionary} />
    </div>
  );
}

export async function generateStaticParams() {
  return ["en", "vi"].map((locale) => ({ locale }));
}
