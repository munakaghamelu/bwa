import "./event.scss"

// pass the data to be loaded to the event from parent (Events) component
export default function Event({img, title, date, price}) {
  return (
    <div className="event" id="event">
      <div className="one">
        <img src={img}/>
      </div>
      <div className="two">
        <p>{title} {date} {price}</p>
      </div>
      <div className="three">
        <a href="#"><h1>LEARN MORE</h1></a>
      </div>
    </div>
  );
}