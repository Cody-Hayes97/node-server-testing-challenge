const db = require("../data/dbConfig.js");
const Students = require("./student-model.js");

beforeEach(async () => {
  await db("students").truncate();
});

describe("Students model", () => {
  /////////////////////////////find
  describe("find", () => {
    it("should return data", async () => {
      const students = await db("students");
      expect(students).toEqual([]);
    });
    it("should return an array", async () => {
      const students = await db("students");
      expect(Array.isArray([students])).toBe(true);
    });
  });
  ///////////////////////////insert
  describe("insert", () => {
    it("should insert data", async () => {
      await Students.insert({ name: "cody" });

      const students = await db("students");
      expect(students).toHaveLength(1);
    });
  });
  //////////////////////////remove
  describe("remove", () => {
    it("should remove data", async () => {
      await Students.insert({ name: "cody" });
      await Students.remove({ id: 1 });

      const students = await db("students");
      expect(students).toHaveLength(1);
    });
  });
});
