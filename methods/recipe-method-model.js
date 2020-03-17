//  `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

const db = require("../data/db-config");

module.exports = {
 getInstructions
};

function getInstructions(recipeId) {
    return db("recipe_method as rm")
    .join("recipes as r", "r.id", "rm.recipe_id")
    .where("r.id", recipeId)
    .select("rm.steps")

}