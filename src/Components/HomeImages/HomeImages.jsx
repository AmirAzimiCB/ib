import React, { useEffect } from "react";
import "./HomeImages.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { gsap } from "gsap";
import VideoLoader from "../VideoLoader/VideoLoader";

export default function HomeImages() {
  const [isTop, setIsTop] = React.useState(true);
  const descRefBottom = React.useRef(null);
  const descRefTop = React.useRef(null);

  // useEffect(() => {
  //   document.getElementById("imagesContainer").scrollTop = 0;
  // }, [isTop]);

  const handleScrollClick = () => {
    console.log("clicked");
    //scroll height
    if (isTop) {
      document.getElementById("home-desc-text").scrollTop = 1000;
    } else {
      document.getElementById("home-desc-text").scrollTop = 0;
    }

    setIsTop(!isTop);
  };
  return (
    <div className='imagesContainer' id='imagesContainer'>
      <img className='homeBg' src='/Images/Home-bg.png' alt='1' border='0' />
      <div className='mainContainer'>
        <div className='left-img-container'>
          <img
            className='left-img'
            src='/Images/Home-img-left.png'
            alt='1'
            border='0'
          />

          <div className='home-text-container '>
            <div className='home-desc-text' id='home-desc-text'>
              <span ref={descRefTop} id='topText' className='top-text'>
                Welcome to Incendiary Balloons! We are a One-Of-A-Kind
                Documentary News Platform Televising the Revolution and
                Reshaping the Media's Narrative Of Our Communities. You are
                about to enter our 3D Art Gallery. Once you enter, press the
                keys on your keyboard to move around the gallery and view all of
                our website categories.
              </span>
              <br />
              <br />
              <br />
              <br />
              <br />
              <span ref={descRefBottom} className='bottom-text' id='bottomText'>
                Use your mouse to click on each art installation picture frame.
                Every individual artpiece leads you to read more about each
                indiadial news topic. If you are using your mobile phone, please
                navigate around the gallery by swiping on the direction that you
                would like to go in.
              </span>
              <br />

              <br />
            </div>
          </div>

          <div className='scroll-text' onClick={handleScrollClick}>
            {" "}
            {isTop ? (
              <AiOutlineArrowDown style={{ marginRight: ".3rem" }} />
            ) : (
              <AiOutlineArrowUp style={{ marginRight: ".3rem" }} />
            )}
            <span>{isTop ? "Scroll to read more" : "Go Back to top"}</span>
          </div>
        </div>
        <div className='right-img-container'>
          <div className='right-img-inner-upper-container'>
            <div className='right-img-inner-upper'>
              <img
                src='/Images/Home-img1.png'
                alt='1'
                border='0'
                className='home-img upper-right-img'
              />
              <div className='home-text-container'>
                <span className='home-text-container-span'>ENTER</span>
              </div>
            </div>
            <div className='right-img-inner-upper'>
              <img
                src='/Images/Home-img2.png'
                alt='1'
                className='home-img upper-right-img'
                border='0'
              />
              <div className='home-text-container'>
                <span className='home-text-container-span'>THE</span>
              </div>
            </div>
          </div>
          <div className='right-img-inner-lower-container'>
            <div className='right-img-inner-lower'>
              <img
                src='/Images/Home-img3.png'
                className='home-img'
                alt='1'
                border='0'
              />
              <div className='home-text-container'>
                <span className='home-text-container-span'>GALLERY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
