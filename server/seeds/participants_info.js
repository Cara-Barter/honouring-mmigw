const participantsData = [
  {
    id: 1,
    firstName: 'Cara',
    lastName: 'Barter',
    email: "example@example.com",
    address1: "123 First Street",
    address2: "suite 101",
    city: "Lanzville",
    province: "BC",
    country: "CA",
    postalCode: "V0V 1V0",
    nation: "Tsawout",
    gender: "non-binary",
    survivor: 'Intergenerational',
  },
  {
    id: 2,
    firstName: 'Jaime',
    lastName: 'Hunt',
    email: "example@example.com",
    address1: "123 First Street",
    address2: "suite 101",
    city: "Victoria",
    province: "BC",
    country: "CA",
    postalCode: "V0T 1V0",
    nation: "Tsawout",
    gender: "non-binary",
    survivor: 'Intergenerational',
  },
]

const adtlInfoData = [
  {
    id: 1,
    age: 42,
    dedicate: "my mom",
    shirtSize: 'L',
    phone: "888-888-8888",
    organization: "Sample Co.",
    participant_id: 1
  },
  {
    id: 2,
    age: 40,
    dedicate: "Gigi",
    shirtSize: 'M',
    phone: "888-888-8888",
    organization: "Hunt & Co.",
    participant_id: 2
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('participants').del()
    .then(function () {
      // Inserts seed entries
      return knex('participants').insert(participantsData);
    }).then(function(){
      return knex('adtlInfo').del();
    }).then(function() {
      return knex('adtlInfo').insert(adtlInfoData);
    });
};
