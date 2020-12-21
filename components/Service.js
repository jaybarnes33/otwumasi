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
          background-color: #21209c;
          border-radius: 20px;

          color: white;
        }
      `}</style>
    </>
  );
};

export default Service;