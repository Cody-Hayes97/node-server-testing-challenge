const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  it("should confirm testing env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("/GET", () => {
    it("should return Hello World", () => {
      request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual("Hello World!");
        });
    });
  });
});
