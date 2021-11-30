
exports.up = function(knex) {
  return knex.schema.createTable('participants', function (table) {
    table.increments('id'); //primary key
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').notNullable();
    table.string('address1').notNullable(); //can I bring multiple inputs into one field???
    table.string('address2').notNullable();
    table.string('city').notNullable();
    table.string('province').notNullable();
    table.string('postalCode').notNullable();
    table.string('country').notNullable();
    table.string('nation');
    table.string('gender');
    table.string('survivor');
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }).createTable('extra_info', function (table) {
      table.increments('id');  
      table.string('age').notNullable();
      table.string('dedicate', 75);
      table.string('shirtSize');
      table.string('phone');
      table.string('organization');
      table.integer('participant_id').unsigned().notNullable(); //foreign key
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table
        .foreign('participant_id')
        .references('id')
        .inTable('participants')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('extra_info').dropTable('participants')
};
