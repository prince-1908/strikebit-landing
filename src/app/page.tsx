import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";
import { About } from "@/components/About";
import { Product } from "@/components/Product";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen flex flex-col">
        <Navbar />
        <Main />
      </div>
      <About />
      <Product />
    </div>
  );
}
