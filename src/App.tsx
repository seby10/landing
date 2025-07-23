import "./presentation/styles/index.css";
import Navbar from "./presentation/components/Hero";
import Contact from "./presentation/components/Contact";
import Footer from "./presentation/components/Footer";


function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
