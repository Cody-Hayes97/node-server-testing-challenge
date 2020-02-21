exports.up = function(knex) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    tbl.string("class", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("students");
};
