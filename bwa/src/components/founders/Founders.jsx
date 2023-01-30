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
            Janet is a portrait artist and Design Manager based in 
            South London. She is one of BWA's co-founders and works 
            with the team to put on a variety of events, exhibitions 
            and find new and exciting ways to promote black female art.
            </h3>
            <h3>
              Connect with Janet on Instagram:
            </h3>
            <h3><a href="https://www.instagram.com/_berchie_/?hl=en" target="_blank">@_berchie_</a></h3>
          </div>
        </div>

        <div className="two">
          <h1>Janet</h1>
        </div>

        <div className="three">
          <img src="assets/leah.png"></img>
          <div className="leah_info">
            <h3>Leah is a portrait artist and Events Manager based in South London. 
            She is one of BWA's co-founders and works with the team to put on a 
            variety of events, exhibitions and find new and exciting ways to 
            promote black female art.
            </h3>
            <h3>
            You can connect with Leah on Instagram:
            </h3>
            <h3><a href="https://www.instagram.com/leahjeanneart/?hl=en" target="_blank">@leahjeanneart</a></h3>
          </div>
        </div>

        <div className="four">
          <h1>Leah</h1>
        </div>
      </div>
    </div>
  );
}