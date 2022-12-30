import "./event.scss"

// pass the data to be loaded to the event from parent (Events) component
export default function Event({data}) { 
  return (
    <div className="event" id="event">
      <div id="content">

        <div className="one">
          {/* <h1>img</h1> */}
          <img src={data.img}/>
        </div>

        <div className="two">
          <h1>{data.title}</h1>
          <h1>{data.date}</h1>
          <h1>{data.price}</h1>
          {/* <p>{title} {date} {price}</p> */}
        </div>

        <div className="three">
          <h1>LEARN MORE</h1>
          {/* <a href="#"><h1>LEARN MORE</h1></a> */}
        </div>

      </div>
    </div>
  );
}
