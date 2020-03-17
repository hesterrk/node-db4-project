const express = require("express");


// -->Embed sub-router here 
const recipeIngredientRouter = require("../rec-ingredients/rec-ingredients-router")

const recipes = require("./recipes-model");
const router = express.Router();

//Using our sub-router here
router.use("/:id/recingredients", recipeIngredientRouter)


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


  //POST NEW RECIPE

  // router.post("/", async (req, res, next) => {
  //   try {
  //     const objectToSend = { name: req.body.name };
  //     const recipe = await recipes.addRecipe(objectToSend);
  //     res.status(201).json(recipe);
  //   } catch (error) {
  //     next(error);
  //   }
  // });











module.exports = router;
