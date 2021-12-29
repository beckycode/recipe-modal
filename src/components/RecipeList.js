import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { RecipeItem } from "./RecipeItem";

export const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  console.log("list", recipes);
  return (
    <main>
      <section className="grid">
        {recipes.drinks.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe}></RecipeItem>
        ))}
      </section>
    </main>
  );
};
