import { Campaings } from "./components/Campaigns";
import { Card } from "./components/Card";
import { Categorys } from "./components/Categorys";
import { Favorites } from "./components/Favorites";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import "./css/output.css";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categorys />
      <Campaings />
      <Favorites />
      <Features />
      <Card />
      <Footer />
    </>
  );
}
