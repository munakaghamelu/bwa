import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#landing">HOME</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">ABOUT</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#founders">FOUNDERS</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#committee">COMMITTEE</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#support">SUPPORT</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#gallery">GALLERY</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#events">EVENTS</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#join">JOIN</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}