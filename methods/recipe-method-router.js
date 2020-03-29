const express = require("express");

const router = express.Router({
    mergeParams: true
  });

  const method = require("./recipe-method-model");



  //  `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
//   - `GET /api/recipes/:id/instructions`

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params
        const making = await method.getInstructions(id)
        res.json(making)

    } catch (error) {
      next(error);
    }
  });


  module.exports = router;
