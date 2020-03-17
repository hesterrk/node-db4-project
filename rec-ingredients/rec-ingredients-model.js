const db = require("../db-config");

// e.g `GET /api/recipes/:id/shoppingList`: getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a specific recipe


module.exports = {
    getShoppingList
  };

  function getShoppingList(recipeId) {
    return db("recipe_ingredients as ri")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .where("ri.recipe_id", recipeId)
    .select("i.*")
    

  }


