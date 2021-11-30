const honouringData = [
  {
    id: 1,
    yourName: 'Buffy EagleFeather',
    lovedOnesName: 'Mary Roberts',
    nation: 'Givers',
    gender: 'Female',
    community: 'Northern Oaks',
    relationship: 'Aunty'
  },
  {
    id: 2,
    yourName: 'Freda White',
    lovedOnesName: 'Quentin T',
    nation: 'Cedar Rose',
    gender: 'Male',
    community: 'Koda Love',
    relationship: 'Cousin'
  },
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('honouring').del()
    .then(function () {
      // Inserts seed entries
      return knex('honouring').insert(honouringData);
    });
};
