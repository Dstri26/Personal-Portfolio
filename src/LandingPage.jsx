import React, { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SocialBar from "./components/Commons/SocialBar";
import MeetTheDeveloper from "./components/AboutMe/MeetTheDeveloper";
import Footer from "./components/Commons/Footer";
import Marquee from "react-fast-marquee";
import mainImage from "./images/trideepbarik.png";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";

function LandingPage() {
  const options = {
    minSize: 120,  // Minimum bubble size
    gutter: 10,  // Space between bubbles
    fringeWidth: 100,  // Padding around the edge
    numCols: 6,
    yRadius: 100,  // Vertical radius
    xRadius: 100,  // Horizontal radius
    cornerRadius: 0,  // Corner radius
    showGuides: false,  // Show bubble guides
    compact: true,  // Compact mode
    gravitation: 5,  // Gravitational pull strength
  };

  const items = [

    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    'https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1',
    'https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp',
    'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png',
    'https://www.mag-corp.com/wp-content/uploads/2021/08/bootstrap-logo-1.png',
    'https://mui.com/static/logo.png',
    'https://www.stickerpress.in/media/products/800x800/83a78dbd45804be5bbd0dd2a82c50fb1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    'https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png',
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    'https://swimburger.net/media/ppnn3pcl/azure.png',
    'https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-File.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7qVIuRwy4ztyl2tjUFgCMVWntjicY957_g&s',
    'https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png',
    'https://www.svgrepo.com/show/303656/php-logo.svg',
    'https://www.svgrepo.com/show/303251/mysql-logo.svg',
    'https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png',
    'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png'
  ];

  return (
    <div className="container">
      <SocialBar />
      <Parallax pages={4} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2}>
          <div className="animation_layer parallax landing-text-container">
            <h1 className="display-2 landing-text">A DEVELOPER'S ODYSSEY</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="animation_layer parallax" id="mountain5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="mountain4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <MeetTheDeveloper />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div
            className="skillset row d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-md-5">
              <p className="display-2">What's in the Tech Voyager's Toolkit?</p>
              <p
                className="developer-text"
                style={{ width: "80%", color: "var(--secondary-color)" }}
              >
                In my digital toolkit, I wield a powerful set of skills tailored
                for the world of web development. Proficient in React and Redux,
                I specialize in crafting dynamic and responsive user interfaces.
                My expertise extends to front-end technologies, enabling me to
                design seamless and visually appealing digital experiences. With
                a keen eye for detail, I bring ideas to life by combining
                creativity with code. Let's explore the skills that power my
                journey.
              </p>
            </div>
            <div className="col-md-5">
              <BubbleUI options={options} className="myBubbleUI">
                {items.map((item, index) => (
                  <div key={index} className="child">
                    <img src={item} alt={`Bubble ${index}`} className="bubble-image" />
                  </div>
                ))}
              </BubbleUI>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          className="d-flex justify-content-center align-items-center"
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandingPage;
