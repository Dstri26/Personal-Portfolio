import Marquee from "react-fast-marquee";
import mainImage from "../../images/trideepbarik.png";

const MeetTheDeveloper = () => {
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
          <p className="display-2">Meet The Developer</p>
          <p className="display-2">&nbsp;&nbsp;&nbsp;</p>
        </Marquee>
      </div>
      <div className="col-md-5" style={{ zIndex: 1 }}>
        <img src={mainImage} alt="Profile" className="img-fluid" />
      </div>
      <div className="col-md-5">
        <p
          className="h6"
          style={{ width: "80%", color: "var(--secondary-color)" }}
        >
          I'm{" "}
          <span style={{ color: "var(--primary-color)" }}>Trideep Barik</span>
          , a tech enthusiast driven by the thrill of creating digital marvels.
          Embarking on a journey across the ever-evolving tech landscape, I've
          passionately transformed concepts into enchanting tech solutions. Join
          me as we navigate the dynamic realms where lines of code spark
          innovation.
          <br />
          <br />
          In this odyssey, I find joy in embracing the unknown, constantly
          venturing beyond my comfort zone. My love for learning propels me
          towards new horizons, unraveling the mysteries of technology with
          every step. Together, let's delve into the boundless possibilities
          that the world of tech has to offer.
        </p>
      </div>
    </div>
  );
};

export default MeetTheDeveloper;
