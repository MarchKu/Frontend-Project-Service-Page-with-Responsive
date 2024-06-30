import LandingPage from "./Pages/LandingPage";
import Services from "./Pages/Services";
import Discover from "./Pages/Discover";
import PricingPlan from "./Pages/PricingPlan";
import Testimonial from "./Pages/Testimonial";
import Newsletter from "./Pages/Newsletter";
import Footer from "./Pages/Footer";
function App() {
  return (
    <main className="w-full flex flex-col justify-start items-center font-Rubik">
      <LandingPage />
      <Services />
      <Discover />
      <PricingPlan />
      <Testimonial />
      <Newsletter/>
      <Footer/>
    </main>
  );
}

export default App;
