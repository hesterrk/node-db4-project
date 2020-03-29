

// GET all recipes in the system that utilize a single ingredient


const db = require("../db-config");

module.exports = {
get,
findIngrById,
getAllRecipes

};


function get() {
    return db("ingredients")
}


function findIngrById(id) {
    return db("ingredients")
    .where({ id })
    .first();

}


//all recipes that belong to single ingredient 

function getAllRecipes(ingredientId) {
    return db("recipe_ingredients as ri")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .where("ri.ingredient_id", ingredientId)
    .select("i.*", "r.name")



}