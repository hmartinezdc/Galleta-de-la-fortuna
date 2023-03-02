import Button from "../Button/Button";
import "./Card.css";

const Card = ({ framework, changeFramework, changeBackGround }) => {
  return (
    <section className="card">
      <div className="card__description">
        <p >{framework.phrase}</p>
        <i className="fa-solid fa-quote-right"></i>
      </div>
      <div className="card__container-btn">
        <Button 
          handleClick={changeFramework} 
          handleClick2={changeBackGround} />
      </div>
      <h3 className="card__author">
        <span>Fuente: </span>
        {framework.author}
      </h3>
    </section>
  );
};

export default Card;
