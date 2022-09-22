import React from "react";

function Recipe({ recipeIndex, data, deleteRecipe }) {
  const {name, cuisine, photo, ingredients, preparation} = data;
  return (
    // <div className="recipe" key={recipeIndex}>
      <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td><img class="scale-down" src={photo} alt="" /></td>
        <td className="content_td" id=""><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td><button name="delete" onClick={() => deleteRecipe(recipeIndex)}>
              Delete
            </button>
        </td>
      </tr>
    // </div>
  );
}

export default Recipe;