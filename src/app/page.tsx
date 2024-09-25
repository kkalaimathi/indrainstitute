import Aboutus from "./components/about";
import Benefits from "./components/benefits";
import Blog from "./components/blog";
import ContactForm from "./components/contact";
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
      <ContactForm />
    </div>
  );
}
