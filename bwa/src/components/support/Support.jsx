import "./support.scss";

export default function Support(){
  return (
    <div className="support" id="support">
      <div id="content">
        <div className="one">
          <p>PAYPAL DONATION LINK</p>
          <a href="https://www.paypal.com/donate/?hosted_button_id=VLXYQ3WDAY8H6" target="_blank">
            <img src="assets/paypal.png"></img>
          </a>
          <p>
            As a black-led organisation serving black women, a donation is the 
            best way to help us support the artist’s we work with.
          </p>
        </div>
        <div className="two">
          <img src="assets/support.png"></img>
        </div>
      </div>
    </div>
  );
}