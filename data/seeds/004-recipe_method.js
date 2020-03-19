exports.seed = async function(knex) {
  await knex("recipe_method").insert([
    {
      recipe_id: 1,
      step_number: 1,
      steps: "Heat the pan and stir occassionaly"
    },
    { recipe_id: 1, step_number: 2, steps: "Add some ginger" },
    {
      recipe_id: 2,
      step_number: 1,
      steps: "Add the oil, add the chana, and the tinned tomatoes"
    },
    { recipe_id: 2, step_number: 2, steps: "let it simmer slowly" },
    {
      recipe_id: 3,
      step_number: 1,
      steps: "Add some spice to the pan and warm gently"
    },
    { recipe_id: 3, step_number: 2, steps: "peel the vegetables" },
    {
      recipe_id: 4,
      step_number: 1,
      steps:
        "Blend the onions in the blender with the galic, whilst the oil is warming up in the pan"
    },
    {
      recipe_id: 4,
      step_number: 2,
      steps: "scrape out the pan fully and put in sink"
    }
  ]);
};
