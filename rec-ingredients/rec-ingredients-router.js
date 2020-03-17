
const express = require("express");

const router = express.Router({
    mergeParams: true
  });


const list = require("./rec-ingredients-model");

// e.g `GET /api/recipes/:id/recingredients`: getShoppingList(recipe_id)`

router.get("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    await list.getShoppingList(id);
      res.json(recIngredient);
    
  } catch (error) {
    next(error);
  }
});







module.exports = router;
