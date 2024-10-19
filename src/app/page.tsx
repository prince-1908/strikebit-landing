import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";
import { About } from "@/components/About";
import { Product } from "@/components/Product";
import { Features } from "@/components/Features";
import { Technology } from "@/components/Technology";
import { Token } from "@/components/Token";
import { Roadmap } from "@/components/Roadmap";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen flex flex-col">
        <Navbar />
        <Main />
      </div>
      <About />
      <Product />
      <Features />
      <Technology />
      <Token />
      <Roadmap />
      <Footer />
    </div>
  );
}
