
exports.seed = async function(knex) {
  await knex('recipe_method').insert([   
    { recipe_id: 1 , steps: "Heat the pan and stir occassionaly" },
    { recipe_id: 2 , steps: "Add the oil, add the chana, and the tinned tomatoes" },
    { recipe_id: 3 , steps: "Add some spice to the pan and warm gently" },
    { recipe_id: 4 , steps: "Blend the onions in the blender with the galic, whilst the oil is warming up in the pan" },

  
  ]);
};
