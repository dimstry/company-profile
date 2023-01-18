import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="myBG">
        <NavBar />
        <Home />
      </div>
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
