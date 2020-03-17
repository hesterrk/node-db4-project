const express = require("express");


// -->Embed other routers in here!!!! like in guided project 3
// e.g `GET /api/recipes/:id/shoppingList`: getShoppingList


const recipes = require("./recipes-model");
const router = express.Router();


//GET  '/' --> GETS ALL RECIPES 

router.get("/", async (req, res, next) => {
    try {
      res.json(await recipes.getRecipes())
    } catch (error) {
      next(error);
    }
  });





module.exports = router;
