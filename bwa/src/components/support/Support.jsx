import "./support.scss";

export default function Support(){
  return (
    <div className="support" id="support">
      <div id="content">
        <div className="one">
          <img src="assets/support.png"></img>
        </div>
        <div className="two">
          <h1>PAYPAL DONATION LINK</h1>
          <a href="https://www.paypal.com/donate/?hosted_button_id=VLXYQ3WDAY8H6" target="_blank">
            <img src="assets/paypal.png"></img>
          </a>
          <p>
            As a black-led organisation serving black women, a donation is the 
            best way to help us support the artist’s we work with.
          </p>
        </div>
      </div>
    </div>
  );
}