const request = require("supertest");
const server = require("../server.js");

describe("GET/", () => {
  it("should return 200", () => {
    return request(server)
      .get("/api/students")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it("should return an array", () => {
    return request(server)
      .get("/api/students")
      .then(res => {
        expect(Array.isArray([res.body])).toBe(true);
      });
  });
});

describe("POST/", () => {
  it("should return name correctly", async () => {
    const student = await request(server)
      .post("/api/students")
      .send({ name: "Cody" })
      .set("Content-Type", "application/json");

    expect(student.body.name).toEqual("Cody");
  });
  it("should return json", () => {
    return request(server)
      .post("/api/students")
      .send({ name: "cody" })
      .then(res => {
        expect(res.type).toBe("application/json");
      });
  });
});

// describe("DELETE/", () => {
//   it("should return status 200", () => {
//     return request(server)
//       .delete("/api/students")
//       .then(res => {
//         expect(res.status).toBe(200);
//       });
//   });
// });
