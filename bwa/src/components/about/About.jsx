import "./about.scss"
import Video from "../video/Video";

export default function About() {
  return (
    <div className="about" id="about">
      <div id="content">
        <div className="one">
          <p><Video/></p>
        </div>
        <div className="two">
          <p> Black Woman Artist Network is a non-profit organisation aiming to promote, 
            celebrate, connect and support Black Women/Woman identifying Artists. 
            Through events, exhibitions, lectures and more we aim to champion black 
            female artists and create spaces that celebrate and uplifts them.
          </p>
        </div>
        <div className="three"></div>
      </div>
    </div>
  );
}