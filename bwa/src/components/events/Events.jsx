import Event from "../event/Event";
import "./events.scss";
import "../event/event.scss";

export default function Events(){
  return (
    <div className="events" id="events">
      <div id="content">

        <div className="one">
          <h1><a href="#">PAST</a> | <a href="#">UPCOMING</a></h1>
        </div>

        <div className="two">
          <Event/>
        </div>

        <div className="three">
          <Event/>
        </div>

        <div className="four">
          <h1><a href="#">LOAD MORE</a></h1>
        </div>

      </div>
    </div>
  );
}