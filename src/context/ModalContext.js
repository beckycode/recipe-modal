import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [recipeData, setRecipeData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalOpen: modalOpen,
        recipeData: recipeData,
        setRecipeData: setRecipeData,
        setModalOpen: setModalOpen,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
