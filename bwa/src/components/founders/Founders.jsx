import "./founders.scss"

export default function Founders(){
  return (
    <div className="founders" id="founders">
      <div id="content">
        <div className="zero">
          <h1>The Founders</h1>
        </div>

        <div className="one">
          <img src="assets/janet.png"></img>
          <div className="janet_info">
            <h3>
            Janet (<a href="https://www.instagram.com/_berchie_/?hl=en" target="_blank">@_berchie_</a>) is a portrait artist and Design Manager based in 
            South London. She is one of BWA's co-founders and works 
            with the team to put on a variety of events, exhibitions 
            and find new and exciting ways to promote black female art.
            </h3>
          </div>
        </div>

        <div className="two">
          <h1><a href="https://www.instagram.com/_berchie_/?hl=en" target="_blank">Janet</a></h1>
        </div>

        <div className="three">
          <img src="assets/leah.png"></img>
          <div className="leah_info">
            <h3>Leah (<a href="https://www.instagram.com/leahjeanneart/?hl=en" target="_blank">@leahjeanneart</a>) is a portrait artist and Events Manager based in South London. 
            She is one of BWA's co-founders and works with the team to put on a 
            variety of events, exhibitions and find new and exciting ways to 
            promote black female art.
            </h3>
          </div>
        </div>

        <div className="four">
          <h1><a href="https://www.instagram.com/leahjeanneart/?hl=en" target="_blank">Leah</a></h1>
        </div>
      </div>
    </div>
  );
}