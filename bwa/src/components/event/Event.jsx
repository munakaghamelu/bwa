import "./event.scss"

// pass the data to be loaded to the event from parent (Events) component
export default function Event({img, title, date, price}) { 
  return (
    <div className="event" id="event">
      <div id="content">

        <div className="one">
          <h1>img</h1>
          {/* <img src={img}/> */}
        </div>

        <div className="two">
          <h1>Title</h1>
          <h1>Date</h1>
          <h1>Price</h1>
          {/* <p>{title} {date} {price}</p> */}
        </div>

        <div className="three">
          <h1>LOAD MORE</h1>
          {/* <a href="#"><h1>LEARN MORE</h1></a> */}
        </div>

      </div>
    </div>
  );
}
