import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import {
  FaLaptopCode,
  FaUserGraduate,
  FaProjectDiagram,
  FaShoppingCart,
  FaBreadSlice,
  FaBriefcase,
  FaUniversity,
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./CircularTimeline.css";

const events = [
  {
    icon: <FaLaptopCode size={40} color="#61DAFB" />,
    title: "Associate Software Engineer / React JS Developer",
    date: "2022-06-27 - Present",
    description:
      "Currently working at Incture Technologies as an Associate Software Engineer and React JS Developer. I manage multiple modules in the Source-To-Pay (S2P) domain, developing dynamic user interfaces using modern techniques with React and Redux. Delivered a Supplier Collaboration Portal implementation in the client environment for Viatris.",
  },
  {
    icon: <FaUserGraduate size={40} color="#339933" />,
    title: "Trainee",
    date: "2022-01-12 - 2022-06-27",
    description:
      "Started my career at Incture Technologies as a trainee, gaining valuable hands-on experience in frontend development using React and Redux. Worked on internal projects including a Reusable Portal and a Food Management Application.",
  },
  {
    icon: <FaProjectDiagram size={40} color="#FF9900" />,
    title: "Founder / Developer - Learn2Infy",
    date: "2021-08 - 2022-01-12",
    description:
      "Founded and developed Learn2Infy, an educational platform for students. Managed both frontend and backend development, implemented marketing strategies, and engaged in customer outreach to grow the platform.",
  },
  {
    icon: <FaShoppingCart size={40} color="#4DB33D" />,
    title: "Ecommerce Brand Creator",
    date: "2022-2023",
    description:
      "Created OtakuRedefined.com, an ecommerce brand specializing in anime merchandise. Handled product listings, customer outreach, and sales through social media and Shopify, achieving significant growth in online sales.",
  },
  {
    icon: <FaBreadSlice size={40} color="#3776AB" />,
    title: "Bakery Startup",
    date: "2022-01 - 2022-03",
    description:
      "Launched a bakery business, managing operations, sales, and customer service. Implemented efficient workflows and ensured high customer satisfaction.",
  },
  {
    icon: <FaBriefcase size={40} color="#F7DF1E" />,
    title: "Freelance Developer",
    date: "2019-2022",
    description:
      "Worked on various web development projects as a freelancer, including a lyrics website, a plot selling company website, and a certificate generator for an edtech company. Delivered end-to-end solutions from development to deployment.",
  }
];

const CircularTimeline = () => {
  const [rotate, setRotate] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [radius, setRadius] = useState(200);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const newRadius = window.innerHeight * 0.5;
      setRadius(newRadius);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRotate = (direction) => {
    if (direction === "next") {
      setRotate((prev) => prev - 360 / events.length);
      setCarouselIndex((prev) => (prev + 1) % events.length);
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    } else {
      setRotate((prev) => prev + 360 / events.length);
      setCarouselIndex((prev) => (prev - 1 + events.length) % events.length);
      if (carouselRef.current) {
        carouselRef.current.prev();
      }
    }
  };

  const angleStep = (2 * Math.PI) / events.length;

  return (
    <div className="timeline-container row" style={{ height: "auto" }}>
      <div className="col-md-8 vertical-carousel">
        <div className="container">
          <div className="row">
            <p
              className="display-4"
              style={{ textAlign: "left", paddingLeft: "2rem" }}
            >
              My Journey to Date
            </p>
          </div>
          <div
            className="row d-flex align-items-left justify-content-start"
            style={{ paddingLeft: "2rem" }}
          >
            <div
              className="col-md-1"
              style={{
                display: carouselIndex === 0 ? "none" : "block",
              }}
            >
              <div
                className="rotate-button"
                onClick={() => handleRotate("prev")}
              >
                <FaArrowLeft />
              </div>
            </div>
            <div
              className="col-md-1"
              style={{
                display:
                  carouselIndex === events?.length - 1 ? "none" : "block",
              }}
            >
              <div
                className="rotate-button"
                onClick={() => handleRotate("next")}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="row">
            <Carousel
              activeIndex={carouselIndex}
              onSelect={(index) => setCarouselIndex(index)}
              ref={carouselRef}
              indicators={false}
              controls={false}
              interval={null}
            >
              {events.map((event, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-content">
                    <h4>{event.title}</h4>
                    <p
                      className="developer-text"
                      style={{ width: "80%", color: "var(--secondary-color)" }}
                    >
                      {event.description}
                    </p>
                    <p className="date">{event.date}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div
          className="circle"
          style={{
            width: radius * 2,
            height: radius * 2,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {events.map((event, index) => {
            const angle = index * angleStep;
            const x = -(radius * Math.cos(angle));
            const y = -(radius * Math.sin(angle));

            return (
              <div
                key={index}
                className="event"
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${-rotate}deg)`,
                }}
              >
                <div className="event-content">{event.icon}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularTimeline;
