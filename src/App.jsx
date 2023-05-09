import "./App.css";
import { CTAVideo, FindOut, Footer, Hero, IconBlog, LearnMore, Migrition, Navbar, Scores } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <CTAVideo/>
      <IconBlog/>
      <FindOut/>
      <Migrition/>
      <LearnMore/>
      <Scores/>
      <Footer/>
    </>
  );
}
