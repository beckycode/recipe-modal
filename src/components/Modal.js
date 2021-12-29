import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const Modal = () => {
  const { modalOpen, setModalOpen, recipeData } = useContext(ModalContext);
  const { name, ingredients, steps, mocktail, glassware } = recipeData;

  return (
    <div className={`modal ${modalOpen ? "modal--show" : ""}`}>
      <a className="link-close" onClick={() => setModalOpen(false)}>
        X
      </a>
      <div className="modal__content">
        <h2 className="modal__title">{name}</h2>
        <div className="modal__section">
          <h3 className="modal__subheader">Ingredients</h3>
          <ul className="modal__list">
            {ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="modal__section">
          <h3 className="modal__subheader">How to prepare</h3>
          <ul className="modal__list modal__list--columns">
            {steps?.map((step, index) => (
              <li index={index}>
                <p>STEP {index + 1}</p>
                <p>{step}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="modal__section">
          <h3 className="modal__subheader">Make it a mocktail</h3>
          <p className="modal__text">{mocktail}</p>
        </div>
        <div className="modal__section">
          <h3 className="modal__subheader">Glass recommendation</h3>
          <p className="modal__text">{glassware}</p>
        </div>
      </div>
    </div>
  );
};
