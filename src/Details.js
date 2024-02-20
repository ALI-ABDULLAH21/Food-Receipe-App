// Import necessary dependencies
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { useParams } from "react-router-dom";

// Details component
const Details = () => {
  // Extract data from the global context
  const { recipedetail, setRecipedetail,handleadd } = useContext(GlobalContext);
  const { id } = useParams();

  // Fetch recipe details on component mount
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const result = await response.json();

        // Update the global state with recipe details
        if (result && result.data.recipe) {
          setRecipedetail(result.data.recipe);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    getDetail();
  }, [id, setRecipedetail]);

  // JSX structure with two columns layout
  return (
    <div className="details-container">
      {/* Left column for ingredients */}
      <div className="ingredients-column">
        <h2>Ingredients</h2>
        {recipedetail && recipedetail.ingredients ? (
          recipedetail.ingredients.map((ingredient, index) => (
            <div key={index}>
              <p>{ingredient.quantity} {ingredient.unit}</p>
              <p>{ingredient.description}</p>
            </div>
          ))
        ) : (
          <p>No ingredients available</p>
        )}
      </div>

      {/* Right column for recipe details and picture */}
      <div className="picture-column">
        <h1>DETAILS</h1>
        <button onClick={()=>handleadd(recipedetail)} style={{backgroundColor:'black',color:'white',borderRadius:'10px'}}>Add to Favourites</button>
        {recipedetail && <img src={recipedetail.image_url} alt="Recipe" className="sinimg" />}
        {recipedetail && recipedetail.title && <div>{recipedetail.title}</div>}
      </div>
    </div>
  );
};

// Export the Details component
export default Details;
