const express = require("express");

const ingredients = require("./ingredients-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await ingredients.get());
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const ingredient = await ingredients.findIngrById(id);
    if (ingredient) {
      res.json(ingredient);
    } else {
      res.status(404).json({ message: "Could not find ingredient with given id." });
    }
  } catch (error) {
    next(error);
  }
});


// GET--> all recipes in the system that utilize a single ingredient

router.get("/:id/recipes", async (req, res, next) => {
  try {
    const { id } = req.params;
    const ingredient = await ingredients.getAllRecipes(id);
    if (ingredient) {
      res.json(ingredient);
    } else {
      res
        .status(404)
        .json({ message: "Could not find recipes for given ingredient" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
