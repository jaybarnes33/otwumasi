import React from "react";

const Service = ({ title, icon, desc }) => {
  return (
    <>
      <div className="item">
        <h3 className="title">
          <span>{icon}</span> {title}
        </h3>
        <p>{desc}</p>
      </div>
      <style jsx>{`
        .item {
          padding: 20px;
          box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.3);
          background-color: rgb(256, 256, 256, 0.9);
          border-radius: 20px;
          z-index: 1;
          color: #21209c;
        }
      `}</style>
    </>
  );
};

export default Service;
