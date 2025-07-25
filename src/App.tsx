import "./presentation/styles/index.css";
import Navbar from "./presentation/components/Hero";
import Contact from "./presentation/components/Contact";
import Footer from "./presentation/components/Footer";
import SmoothScroll from "./presentation/components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <p>some content here</p>
      <Contact />
      <Footer />
      {/* <h1 className='text-9xl'>
        Skibidi Papu
      </h1> */}
      {/* <div className="bg-orange-procoinec">
        <p>Papu</p>
      </div> */}
    </SmoothScroll>
  );
}

export default App;
