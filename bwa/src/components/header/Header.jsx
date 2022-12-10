import "./header.scss";

export default function Header({setMenuOpen, menuOpen}){
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">

        <div className="left">
          <a href="https://www.instagram.com/bwartist_/?hl=en" className="insta" target="_blank">
            <img src="assets/insta_icon.png" width/>
          </a>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>
    </div>
  );
}