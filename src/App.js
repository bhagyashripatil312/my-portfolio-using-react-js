import "./App.css";
import HeadersComponent from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "./Components/BodyComponents/AboutUs";
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "./Components/BodyComponents/Contact";
import ContactForm from "./Components/BodyComponents/ContactForm";

import Footer from "./Components/BodyComponents/Footer";
import Experience from "./Components/BodyComponents/Experience";

function App() {
  return (
    <div>
      <HeadersComponent />
      <AboutUs />
      <Portfolio />
      <Experience />
      {/* <ContactForm /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
