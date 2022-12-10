import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Founders from "./components/founders/Founders";
import Committee from "./components/committee/Committee";
import Support from "./components/support/Support";
import Gallery from "./components/gallery/Gallery";
import Events from "./components/events/Events";
import Join from "./components/join/Join";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="sections">
        <Landing/>
        <About/>
        <Founders/>
        <Committee/>
        <Support/>
        <Gallery/>
        <Events/>
        <Join/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;