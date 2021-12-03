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
    email: "jams@jams.com",
    address1: "589 9th Blvd",
    address2: "suite 888",
    city: "Victoria",
    province: "BC",
    country: "CA",
    postalCode: "V0K 1M0",
    nation: "Friendship",
    gender: "Female",
    survivor: 'Supporter',
  },
  {
    id: 3,
    firstName: 'Rosy',
    lastName: 'Martin',
    email: "myemail@email.com",
    address1: "479 5th Ave",
    address2: "",
    city: "New Westminster",
    province: "BC",
    country: "CA",
    postalCode: "V0X 1X0",
    nation: "Songhees",
    gender: "Fem",
    survivor: 'Day School',
  },
]

const extraData = [
  {
    id: 1,
    age: 42,
    dedicate: "my mom",
    shirtSize: 'Large',
    phone: "888-888-8888",
    organization: "Sample Co.",
    participant_id: 1
  },
  {
    id: 2,
    age: 40,
    dedicate: "Gigi",
    shirtSize: 'Medium',
    phone: "222-333-4444",
    organization: "Hunt & Co.",
    participant_id: 2
  },
  {
    id: 3,
    age: 18,
    dedicate: "Aunty",
    shirtSize: 'XL',
    phone: "111-222-3333",
    organization: "Rainbow Tree",
    participant_id: 3
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('participants').del()
    .then(function () {
      // Inserts seed entries
      return knex('participants').insert(participantsData);
    }).then(function(){
      return knex('extra_info').del();
    }).then(function() {
      return knex('extra_info').insert(extraData);
    });
};
