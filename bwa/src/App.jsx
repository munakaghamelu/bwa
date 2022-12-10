import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Founders from "./components/founders/Founders";
import Committee from "./components/committee/Committee";
import Support from "./components/support/Support";
import Gallery from "./components/gallery/Gallery";
import Events from "./components/events/Events";
import Join from "./components/join/Join";
import Contact from "./components/contact/Contact";
import "./app.scss";
import {useState} from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
    </div>
  );
}

export default App;