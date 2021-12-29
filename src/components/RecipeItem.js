import React, { useEffect, useState, useRef, useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const RecipeItem = ({ recipe }) => {
  const { setModalOpen, setRecipeData } = useContext(ModalContext);
  const [hover, setHover] = useState(false);
  const imageRef = useRef(null);
  const { name, images } = recipe;

  useEffect(() => {
    if (hover) {
      imageRef.current.src = images.back;
    } else {
      imageRef.current.src = images.front;
    }
  }, [hover]);

  const openModal = () => {
    setModalOpen(true);
    setRecipeData(recipe);
  };

  return (
    <article className="recipe-item">
      <img
        alt={name}
        className="img"
        onClick={openModal}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        ref={imageRef}
        src={images.front}
      />
    </article>
  );
};
