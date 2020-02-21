const db = require("../data/dbConfig.js");

module.exports = {
  find,
  insert,
  remove
};

function find() {
  return db("students");
}

async function insert(student) {
  const [id] = await db("students").insert(student, "id");
  return db("students")
    .where({ id })
    .first();
}

function remove(id) {
  return db("students")
    .delete()
    .where("id", id);
}
