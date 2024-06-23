import React from "react";
import Marquee from "react-fast-marquee";
import mainImage from "../../images/trideepbarik.png";
import Typing from "react-typing-effect";

const MeetTheDeveloper = () => {
  const displayTextRenderer = (text, i) => {
    return (
      <p key={i} className="developer-text">
        {text.split("").map((char, index) => {
          const key = `${char}-${index}`;
          return (
            <span key={key} style={{ color: "var(--secondary-color)" }}>
              {char}
            </span>
          );
        })}
      </p>
    );
  };

  return (
    <div className="row main-section d-flex justify-content-center align-items-center">
      <div className="col-md-12" style={{ marginBottom: "-30vh", zIndex: "0" }}>
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          speed={150}
          gradient={true}
          gradientColor="#163034"
        >
          <p className="display-2">&nbsp;&nbsp;&nbsp;</p>
          <p className="display-2 marquee-text">Meet The Developer</p>
          <p className="display-2">&nbsp;&nbsp;&nbsp;</p>
        </Marquee>
      </div>
      <div className="col-md-4">
        <Typing
          displayTextRenderer={displayTextRenderer}
          speed={5}
          cursor={" "}
          eraseDelay={99999999}
          className="developer-text"
          text={[
            "I'm Trideep Barik, a tech enthusiast driven by the thrill of creating digital marvels. Embarking on a journey across the ever-evolving tech landscape, I've passionately transformed concepts into enchanting tech solutions.",
          ]}
        />
        <Typing
          displayTextRenderer={displayTextRenderer}
          speed={5}
          cursor={" "}
          typingDelay={6000}
          eraseDelay={99999999}
          className="developer-text"
          text={[
            "Join me as we navigate the dynamic realms where lines of code spark innovation. In this odyssey, I find joy in embracing the unknown, constantly venturing beyond my comfort zone. My love for learning propels me towards new horizons, unraveling the mysteries of technology with every step. Together, let's delve into the boundless possibilities that the world of tech has to offer.",
          ]}
        />
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-4" style={{ zIndex: 1 }}>
        <img src={mainImage} alt="Profile" className="img-fluid" />
      </div>
    </div>
  );
};

export default MeetTheDeveloper;
