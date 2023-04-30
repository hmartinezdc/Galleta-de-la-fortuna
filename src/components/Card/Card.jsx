import Button from "../Button/Button";
import "./Card.css";

const Card = ({ phraseObject, handleClick }) => {
  return (
    <section className="card">
      <h1>Galleta de la Fortuna</h1>
      <div className="card__description">
        <p >{phraseObject.phrase}</p>
        <i className="fa-solid fa-quote-right"></i>
      </div>
      <div className="card__container-btn">
      <h3 className="card__author">
        <span>Fuente: </span>
        {phraseObject.author}
      </h3>
        <Button handleClick={handleClick}/>
      </div>
    </section>
  );
};

export default Card;
