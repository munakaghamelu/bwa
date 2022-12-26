import { useState } from "react";
import "./gallery.scss";

export default function Gallery(){
  const images = [
    { source: 'freedom_(1)'},
    { source: 'freedom_(101)'},
    { source: 'freedom_(11)'},
    { source: 'freedom_(12)'},
    { source: 'freedom_(13)'},
    { source: 'freedom_(14)'},
    { source: 'freedom_(15)'},
    { source: 'freedom_(16)'},
    { source: 'freedom_(17)'},
    { source: 'freedom_(18)'},
    { source: 'freedom_(19)'},
    { source: 'freedom_(2)'},
    { source: 'freedom_(20)'},
    { source: 'freedom_(21)'},
    { source: 'freedom_(22)'},
    { source: 'freedom_(23)'},
    { source: 'freedom_(24)'},
    { source: 'freedom_(25)'},
    { source: 'freedom_(26)'},
    { source: 'freedom_(27)'},
    { source: 'freedom_(28)'},
    { source: 'freedom_(29)'},
    { source: 'freedom_(3)'},
    { source: 'freedom_(30)'},
    { source: 'freedom_(31)'},
    { source: 'freedom_(33)'},
    { source: 'freedom_(35)'},
    { source: 'freedom_(37)'},
    { source: 'freedom_(38)'},
    { source: 'freedom_(4)'},
    { source: 'freedom_(40)'},
    { source: 'freedom_(43)'},
    { source: 'freedom_(44)'},
    { source: 'freedom_(46)'},
    { source: 'freedom_(49)'},
    { source: 'freedom_(5)'},
    { source: 'freedom_(51)'},
    { source: 'freedom_(53)'},
    { source: 'freedom_(55)'},
    { source: 'freedom_(57)'},
    { source: 'freedom_(59)'},
    { source: 'freedom_(6)'},
    { source: 'freedom_(61)'},
    { source: 'freedom_(63)'},
    { source: 'freedom_(65)'},
    { source: 'freedom_(66)'},
    { source: 'freedom_(67)'},
    { source: 'freedom_(68)'},
    { source: 'freedom_(69)'},
    { source: 'freedom_(7)'},
    { source: 'freedom_(70)'},
    { source: 'freedom_(71)'},
    { source: 'freedom_(72)'},
    { source: 'freedom_(73)'},
    { source: 'freedom_(74)'},
    { source: 'freedom_(75)'},
    { source: 'freedom_(76)'},
    { source: 'freedom_(77)'},
    { source: 'freedom_(78)'},
    { source: 'freedom_(79)'},
    { source: 'freedom_(8)'},
    { source: 'freedom_(80)'},
    { source: 'freedom_(81)'},
    { source: 'freedom_(82)'},
    { source: 'freedom_(83)'},
    { source: 'freedom_(84)'},
    { source: 'freedom_(85)'},
    { source: 'freedom_(86)'},
    { source: 'freedom_(87)'},
    { source: 'freedom_(88)'},
    { source: 'freedom_(89)'},
    { source: 'freedom_(9)'},
    { source: 'freedom_(90)'},
    { source: 'freedom_(91)'},
    { source: 'freedom_(92)'},
    { source: 'freedom_(93)'},
    { source: 'freedom_(94)'},
    { source: 'freedom_(95)'},
    { source: 'freedom_(96)'},
    { source: 'freedom_(97)'},
    { source: 'freedom_(98)'},
    { source: 'freedom_(99)'},
  ];
  
  const buildURL = imagePath => `https://s3.amazonaws.com/bwa.gallery/${imagePath}.jpg`

  const [imgIndex, setImgIndex] = useState(0);
  
  const handleClick = (way) => {
    way === "next"
    ? setImgIndex(imgIndex > images.length ? 0 : imgIndex+8)
    : setImgIndex(imgIndex < 0 ? images.length - 8 : imgIndex-8);
  };

  return (
    <div className="gallery" id="gallery">
      <div id="content">
        <div className="one">

          <div className="row">
            <div className="column">
              {images.slice(imgIndex, imgIndex+2).map((item,index) => {
                return <img src={buildURL(item.source)}/>
              })}
            </div>
            <div className="column">
              {images.slice(imgIndex+2, imgIndex+4).map((item,index) => {
                return <img src={buildURL(item.source)}/>
              })}
            </div>
            <div className="column">
              {images.slice(imgIndex+4, imgIndex+6).map((item,index) => {
                return <img src={buildURL(item.source)}/>
              })}
            </div>
            <div className="column">
              {images.slice(imgIndex+6, imgIndex+8).map((item,index) => {
                return <img src={buildURL(item.source)}/>
              })}
            </div>
          </div>
          
        </div>

        <div className="two" onClick={() => handleClick()}>
          Prev
        </div>

        <div className="three" onClick={() => handleClick("next")}>
          Next
        </div>

      </div>
    </div>
  );
}