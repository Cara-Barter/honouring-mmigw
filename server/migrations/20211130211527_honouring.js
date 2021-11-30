
exports.up = function(knex) {
    return knex.schema.createTable('honouring', (table) => {
        table.increments('id'); //primary key
        table.string('yourName').notNullable();
        table.string('lovedOnesName').notNullable();
        table.string('nation');
        table.string('gender');
        table.string('community');
        table.string('relationship');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('honouring');
};
