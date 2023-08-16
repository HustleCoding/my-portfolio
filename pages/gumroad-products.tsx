import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Product = {
  title: string;
  description: string;
  link: string;
};

const products: Product[] = [
  {
    title:
      "Mastering JavaScript Interviews: A Comprehensive Q&A Guide with Code Examples",
    description:
      "Unlock the secrets to acing your JavaScript interviews with our comprehensive guide.",
    link: "https://fdobinciuc.gumroad.com/l/gsgmr",
  },
  {
    title: "React Expertise: Your Definitive Guide to Frontend Mastery",
    description:
      "Embark on a comprehensive journey to master React and sharpen your frontend skills!",
    link: "https://fdobinciuc.gumroad.com/l/tjsfag",
  },
  {
    title:
      "Mastering JavaScript with the Feynman Technique: A Comprehensive Guide",
    description:
      'Mastering JavaScript with the Feynman Technique: A Comprehensive Guide" is a meticulously crafted guide designed to help learners at all levels deepen their understanding of JavaScript.',
    link: "https://fdobinciuc.gumroad.com/l/fhipk",
  },
];

const GumroadProducts: React.FC = () => (
  <div>
    <Head>
      <title>Florin Dobinciuc | Gumroad Products</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Header />
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-black">Gumroad Products</h1>
        {products.map((product) => (
          <Link key={product.title} href={product.link} passHref>
            <div className="block mb-8 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer dynamic-gradient">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {product.title}
              </h2>
              <p className="text-white">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer className="bg-[#003366]" />
  </div>
);

export default GumroadProducts;
