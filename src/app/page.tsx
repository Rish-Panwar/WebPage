import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse" />
      <section className="relative z-10 mt-48 px-4 sm:px-6">
        <Navbar />
        <Hero />
        <Grid />
      </section>
    </div>

  );
}
``