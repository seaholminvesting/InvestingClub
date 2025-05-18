import { Helmet } from "react-helmet";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>InvestEd - High School Investing & Finance Club</title>
        <meta 
          name="description" 
          content="Join our high school's premier investing and finance club to gain essential financial literacy skills and start building wealth early."
        />
        <meta property="og:title" content="InvestEd - High School Investing & Finance Club" />
        <meta property="og:description" content="Learn financial literacy, investment basics and build your future with our high school finance club." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section id="hero" className="py-12 md:py-20">
        <Hero />
      </section>
      
      <section id="mission">
        <Mission />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
