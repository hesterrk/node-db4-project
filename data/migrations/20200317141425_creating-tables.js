exports.up = async function(knex) {
  //Recipe Table
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.text("name").notNull().unique()
  });

  //Ingredients Table

  await knex.schema.createTable("ingredients", (table) => {
     table.increments("id")
     table.text("name").notNull().unique()

  });

  //Recipe_Ingredients table

  await knex.schema.createTable("recipe_ingredients", (table) => {
      table.increments("id")
      table.integer("recipe_id")
      .notNull()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      table.integer("ingredient_id")
      .notNull()
      .references("id")
      .inTable("ingredients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      table.float("quantity").notNull()
  })


  //Recipe_Method table 

  await knex.schema.createTable("recipe_method", (table) => {
      table.increments("id")
      table.integer("recipe_id")
      .notNull()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      table.text("steps").notNull()

  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_method");
  await knex.schema.dropTableIfExists("recipe_ingredients");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");

};
