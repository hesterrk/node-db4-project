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

  //GET RECIPES BY ID 

  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const recipe = await recipes.findRecipeId(id);
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: "Could not find recipe with given id." });
      }
    } catch (error) {
      next(error);
    }
  });





module.exports = router;
