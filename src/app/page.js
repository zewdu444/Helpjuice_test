import Image from "next/image";
import Hero from "./components/Hero";
import ActionCard from "./components/ActionCard";

export default function Home() {
  return (
    <main className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <Hero />
      <ActionCard />
    </main>
  );
}
