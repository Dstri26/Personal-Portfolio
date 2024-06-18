// MasonryCards.js
import React from "react";
import "./MasonryCards.css";

const projectData = [
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/79/thumb_78284_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/79/thumb_78521_projects_home.jpeg",
  },
  {
    type: "text",
    title: "Card title",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    lastUpdated: "Last updated 3 mins ago",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/79/thumb_78389_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/79/thumb_78221_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/79/thumb_78137_projects_home.jpeg",
  },
  {
    type: "text",
    title: "Card title",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    lastUpdated: "Last updated 3 mins ago",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/79/thumb_78116_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/78/thumb_77866_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/77/thumb_76911_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d18lzomh2kdn9i.cloudfront.net/projects/0001/77/thumb_76928_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d18lzomh2kdn9i.cloudfront.net/projects/0001/77/thumb_76769_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d18lzomh2kdn9i.cloudfront.net/projects/0001/77/thumb_76915_projects_home.jpeg",
  },
  {
    type: "text",
    title: "Card title",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    lastUpdated: "Last updated 3 mins ago",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/72/thumb_71237_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d18lzomh2kdn9i.cloudfront.net/projects/0001/77/thumb_76901_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/77/thumb_76071_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d32swnnyen7sbd.cloudfront.net/projects/0001/72/thumb_71758_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d18lzomh2kdn9i.cloudfront.net/projects/0001/77/thumb_76928_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d18lzomh2kdn9i.cloudfront.net/projects/0001/77/thumb_76769_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d18lzomh2kdn9i.cloudfront.net/projects/0001/77/thumb_76915_projects_home.jpeg",
  },
  {
    type: "image",
    src: "https://d18lzomh2kdn9i.cloudfront.net/projects/0001/77/thumb_76928_projects_home.jpeg",
  },
  {
    type: "text",
    title: "Card title",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    lastUpdated: "Last updated 3 mins ago",
  },
];

const MasonryCards = () => {
  return (
    <div className="container-fluid">
      <div className="card-columns masonry-like">
        {projectData.map((item, index) => (
          <div key={index} className="card">
            {item.type === "image" && (
              <img
                className="card-img-top border-0 rounded"
                src={item.src}
                alt="Card cap"
              />
            )}
            {item.type === "text" && (
              <div className="card-body bg-secondary text-white">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <p className="card-text">
                  <small className="text-muted">{item.lastUpdated}</small>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryCards;
