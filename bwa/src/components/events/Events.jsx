// import Event from "../event/Event";
import "./events.scss";
// import "../event/event.scss";
import { useState } from "react";

export default function Events(){
  const eventsList = [
    { img: "https://s3.amazonaws.com/bwa.gallery/e_freedom.png",
      title: "Expressions of Freedom Art",
      date: "10th September 2021",
      price: "Free",
      link: "https://www.eventbrite.com/e/expressions-of-freedom-art-exhibition-tickets-167110529091",
    },
    {
      img: "https://s3.amazonaws.com/bwa.gallery/e_poetry.png",
      title: "Poetry and Paint - Matthew's Yard",
      date: "19th November 2021",
      price: "Free",
      link: "https://www.eventbrite.com/e/poetry-and-paint-bwa-event-tickets-198779162827",
    },
    {
      img: "https://s3.amazonaws.com/bwa.gallery/e_movement.png",
      title: "Movement Art Exhibition",
      date: "9th October 2022",
      price: "Free",
      link: "https://www.eventbrite.com/e/movement-art-exhibition-tickets-417791905837",
    },
    {
      img: "https://s3.amazonaws.com/bwa.gallery/e_poetry2.png",
      title: "Poetry and Paint - Prince of Peckham",
      date: "19th October 2022",
      price: "Free",
      link: "https://www.eventbrite.com/e/poetry-and-paint-bwa-event-tickets-417793861687",
    },
    {
      img: "https://s3.amazonaws.com/bwa.gallery/e_lectures2.png",
      title: "Black Joy and Art History",
      date: "28th October 2022",
      price: "Free",
      link: "https://www.eventbrite.com/e/black-joy-and-art-history-tickets-442987295927",
    },
    {
      img: "https://s3.amazonaws.com/bwa.gallery/e_lectures.png",
      title: "Black Historical Figures in Art History",
      date: "3rd November 2022",
      price: "Free",
      link: "https://www.eventbrite.com/e/black-historical-figures-in-art-history-tickets-442985159537",
    },
    {
      img: "https://s3.amazonaws.com/bwa.gallery/e_afroHeritage.png",
      title: "BWA Social: African heritage Tour at Tate Britain",
      date: "11th December 2022",
      price: "Free",
      link: "https://www.eventbrite.com/e/bwa-social-african-heritage-tour-at-tate-britain-tickets-476328650817",
    }
  ];

  const upcomingEvents = [
    {
      img: "https://s3.amazonaws.com/bwa.gallery/princeofpeck_410.JPG",
      title: "Stay up to date",
      date: "with our socials",
      price: "for upcoming events! ",
      link: "",
    },
  ];
  
  const [eventIndex, setEventIndex] = useState(0);
  const [curList, setList] = useState(eventsList);

  const chooseList = (select) => {
    select === "upcoming"
    ? setList(upcomingEvents)
    : setList(eventsList);
  }

  const handleClick = (way) => {
    way === "more"
    ? setEventIndex(eventIndex >= curList.length ? 0 : eventIndex+2)
    : setEventIndex(eventIndex < 0 ? curList.length - 2 : eventIndex-2);
  };

  return (
    <div className="events" id="events">
      <div id="content">

        <div className="one">
          <div className="row">
            <div className="column">
              <div className="past" onClick={() => chooseList("past")}>
                <h1>PAST</h1>
              </div>
            </div>

            <div className="column">
              <div className="upcoming" onClick={() => chooseList("upcoming")}>
                <h1>UPCOMING</h1>
              </div>
            </div>
          </div>

        </div>

        <div className="two">
          <div className="row">
            <div className="column">
              {curList.slice(eventIndex, eventIndex+1).map((event,index) => {
                return <img src={event.img}/>
              })}     
            </div>

            <div className="column">
              {curList.slice(eventIndex, eventIndex+1).map((event,index) => {
                return <h1>{event.title}</h1>
              })}
              {curList.slice(eventIndex, eventIndex+1).map((event,index) => {
                return <h1>{event.date}</h1>
              })}
              {curList.slice(eventIndex, eventIndex+1).map((event,index) => {
                return <h1>{event.price}</h1>
              })}
            </div>

            <div className="column">
              {curList.slice(eventIndex, eventIndex+1).map((event,index) => {
                return <a href={event.link} target="_blank"><h1>LEARN MORE</h1></a>
              })}
            </div>
          </div>
        </div>

        <div className="three">
        <div className="row">
            <div className="column">
              {curList.slice(eventIndex+1, eventIndex+2).map((event,index) => {
                return <img src={event.img}/>
              })}     
            </div>

            <div className="column">
              {curList.slice(eventIndex+1, eventIndex+2).map((event,index) => {
                return <h1>{event.title}</h1>
              })}
              {curList.slice(eventIndex+1, eventIndex+2).map((event,index) => {
                return <h1>{event.date}</h1>
              })}
              {curList.slice(eventIndex+1, eventIndex+2).map((event,index) => {
                return <h1>{event.price}</h1>
              })}
            </div>

            <div className="column">
              {curList.slice(eventIndex+1, eventIndex+2).map((event,index) => {
                return <a href={event.link} target="_blank"><h1>LEARN MORE</h1></a>
              })}
            </div>
          </div>
        </div>

        <div className="four">
          <div className="more" onClick={() => handleClick("more")}>
            <h1>LOAD MORE</h1>
          </div>
        </div>

      </div>
    </div>
  );
}