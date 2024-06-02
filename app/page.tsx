import Image from "next/image";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Experince from "@/components/Experince";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/Data/GridItems";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Experince />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}
