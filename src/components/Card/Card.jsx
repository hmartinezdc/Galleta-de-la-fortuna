import Button from "../Button/Button";
import "./Card.css";

const Card = ({ framework, changeFramework, changeBackGround }) => {
  return (
    <section className="card">
      <div className="card__container-btn">
        <Button handleClick={changeFramework} handleClick2={changeBackGround} />
      </div>

      <p className="card__description">{framework.phrase}</p>

      <h3 className="card__title">
        <span>Fuente: </span>
        {framework.author}
      </h3>
    </section>
  );
};

export default Card;
