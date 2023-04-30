import React from "react";

const Background = ({ background }) => {
  return (
    <div className="card__container-img">
      <img loading="lazy" src={background.img} alt="" />
    </div>
  );
};

export default Background;
