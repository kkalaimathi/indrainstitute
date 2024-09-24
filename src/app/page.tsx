import Aboutus from "./components/about us";
import Benefits from "./components/benefits";
import Blog from "./components/blog";
import Hero from "./components/hero";
import Services from "./components/services";
import Testimonials from "./components/testimonial";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Aboutus /><br /><br />
      <Services /><br /><br />
      <Benefits />
      <Blog/>
      <Testimonials /><br /><br />
    </div>
  );
}
