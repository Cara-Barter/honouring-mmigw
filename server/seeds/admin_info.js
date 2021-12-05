const adminData = [
  {
    id: 101,
    firstName: "Admin",
    lastName: "Account",
    email: "test@test.com",
    role: "Boss Lady",
    username: "boss",
    password: "test",
  },
  {
    id: 102,
    firstName: "User2",
    lastName: "TBD",
    email: "TBD@test.com",
    role: "worker",
    username: "worker",
    password: "test",
  },
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert(adminData);
    });
};
