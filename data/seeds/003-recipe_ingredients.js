
exports.seed = async function(knex) {
  await knex('recipe_ingredients').insert([   
    { recipe_id: 1, ingredient_id: 1, quantity: 200.5  },
    { recipe_id: 1, ingredient_id: 5, quantity: 50.75  },
    { recipe_id: 1, ingredient_id: 6, quantity: 0.75  },
    { recipe_id: 1, ingredient_id: 8, quantity: 800  },
    { recipe_id: 1, ingredient_id: 7, quantity: 400  },
    { recipe_id: 2, ingredient_id: 2, quantity: 505  },
    { recipe_id: 2, ingredient_id: 5, quantity: 0.45  },
    { recipe_id: 2, ingredient_id: 6, quantity: 0.95  },
    { recipe_id: 2, ingredient_id: 7, quantity: 405  },
    { recipe_id: 2, ingredient_id: 8, quantity: 805  },
    { recipe_id: 3, ingredient_id: 3, quantity: 500 },
    { recipe_id: 3, ingredient_id: 5, quantity: 0.25  },
    { recipe_id: 3, ingredient_id: 6, quantity: 0.55  },
    { recipe_id: 3, ingredient_id: 7, quantity: 305  },
    { recipe_id: 3, ingredient_id: 8, quantity: 905  },
    { recipe_id: 4, ingredient_id: 4, quantity: 900 },
    { recipe_id: 4, ingredient_id: 5, quantity: 0.65  },
    { recipe_id: 4, ingredient_id: 6, quantity: 0.435  },
    { recipe_id: 4, ingredient_id: 7, quantity: 305  },
    { recipe_id: 4, ingredient_id: 8, quantity: 1005  },

  ]);
};
