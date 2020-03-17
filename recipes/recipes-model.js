// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

// STRETCH
// - `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
// - `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient
const db = require('../db-config')


module.exports = {
    getRecipes,
    findRecipeId,
    addRecipe,
    // getShoppingList
    
  };

  //GETS all recipes
  function getRecipes() {
      return db("recipes");

  }

  function findRecipeId(id) {
    return db("recipes")
      .where({ id })
      .first();
  }

  function addRecipe(recipe) {
    return db("recipes").insert(recipe);
      

  }

  // function getShoppingList(recipeId) {
  //   return db("recipe_ingredients as ri")
  //   .join("ingredients as i", "i.id", "ri.ingredient_id")  
  //   .where("ri.recipe_id", recipeId)
  //   .select("i.*")

  // }