import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
function App() {
  console.log('hello');
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Services/>
  <Tours/>
  <Footer/>
  </>
  );
}

export default App;
