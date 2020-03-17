// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

// STRETCH
// - `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
// - `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient
const db = require('../db-config')


module.exports = {
    getRecipes,
    findRecipeId,
    addRecipe
    
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