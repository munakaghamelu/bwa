import "./committee.scss"

export default function Committee(){
  return (
    <div className="committee" id="committee">
      <div id="content">
        <div className="zero">
          <h1>The Committee</h1>
        </div>

        <div className="one">
          <img src="assets/muna.png"></img>
          <div className="muna_info">
            <h3>Muna (<a href="https://www.instagram.com/bymuna.ko/?hl=en" target="_blank">@bymuna.ko</a>) 
            is an Artist and Software Engineer based in London. 
              You can find her playfully taking over BWA's Instagram 
              stories, documenting exhibitions she has visited, or coding up the 
              BWA website. 
            </h3>
          </div>
        </div>

        <div className="two">
          <h1><a href="https://www.instagram.com/bymuna.ko/?hl=en" target="_blank">Muna</a></h1>
        </div>
        
        <div className="three">
          <img src="assets/sabina.png"></img>
          <div className="sabina_info">
            <h3>Contemporary artist and project manager Sabina Silver 
              (<a href="https://www.instagram.com/sabinasilverx/?hl=en" target="_blank">@sabinasilverx</a>)
              lives and works in London. She collaborates with the team to advance BWA's purpose and is an art aficionado. 
              Her primary responsibility inside the organisation is focused largely on highlighting 
              outstanding and intriguing exhibitions of black female art.
            </h3>
          </div>
        </div>

        <div className="four">
          <h1><a href="https://www.instagram.com/sabinasilverx/?hl=en" target="_blank">Sabina</a></h1>
        </div>

        <div className="five">
          <img src="assets/louise.png"></img>
          <div className="louise_info">
            <h3>Louise (<a href="https://www.instagram.com/louise_hall_art/?hl=en" target="_blank">@louise_hall_art</a>) 
            is a multidisciplinary artist, workshop facilitator and educator. 
              You can find Louise running workshops and art lecture series for BWA.
            </h3>
          </div>
        </div>

        <div className="six">
            <h1><a href="https://www.instagram.com/louise_hall_art/?hl=en" target="_blank">Louise</a></h1>
        </div>

        <div className="seven">
          <img src="assets/khadija.png"></img>
          <div className="khad_info">
            <h3>Khadija Cecile Niang (<a href="https://www.instagram.com/khadijacecileart/?hl=en" target="_blank">@khadijacecileart</a>)
              is a Norway-born Senegalese multi-disciplinary artist, 
              currently based in London. She also works in arts communications and as well 
              as supporting BWA with events and gallery trips, she curates the newsletter 
              with opportunities and more.
            </h3>
          </div>
        </div>

        <div className="eight">
            <h1><a href="https://www.instagram.com/khadijacecileart/?hl=en" target="_blank">Khadija</a></h1>
        </div>

      </div>
    </div>
  );
}