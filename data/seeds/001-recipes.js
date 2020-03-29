
exports.seed = async function(knex) {
  await knex('recipes').insert([   
    { name: 'Sag Aloo' },
    { name: 'Chana Masala'},
    { name: 'Aubergine Masala' },
    { name: 'Cauli Masala'}
  ]);
};
