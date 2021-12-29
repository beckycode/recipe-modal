import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState({ drinks: [] });

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(
        "https://assets.24g.com/public/2022-frontend-test-project/drinks.json"
      );
      const json = await response.json();
      setRecipes(json);
    };
    getApi();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes: recipes }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
