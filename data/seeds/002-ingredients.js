
exports.seed = async function(knex) {
  await knex('ingredients').insert([   
    { name: 'Potato'},
    { name: 'Chickpea' },
    { name: 'Aubergine' },
    { name: 'Cauliflower' },
    { name: 'Garlic' },
    { name: 'Spice' },
    { name: 'Tinned Tomatos' },
    { name: 'Extra Virgin Olive Oil' }
  ]);
};
