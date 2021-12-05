
exports.up = function(knex) {
 return knex.schema.createTable('admin', function (table) {
    table.increments('id'); //primary key
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').notNullable();
    table.string('role').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now());
 }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
  
};
