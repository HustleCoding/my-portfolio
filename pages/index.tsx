import Head from "next/head";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen dynamic-gradient">
      <Head>
        <title>Florin Dobinciuc | Personal Website</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Introduction />
      <Skills />
      {/*<Projects />*/}
      <Contact />
      <Footer />
    </div>
  );
}
