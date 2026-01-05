import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Organized Life | Premium Digital Templates for Every Journey</title>
        <meta
          name="description"
          content="Beautiful, affordable digital templates for students, professionals, and dreamers. Habit trackers, budget planners, and more starting at just $4."
        />
        <meta
          name="keywords"
          content="digital templates, planner templates, habit tracker, budget planner, student planner, professional templates"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Categories />
          <About />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
