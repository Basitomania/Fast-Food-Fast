import request from "supertest";

import app from "../app";
// const request = require("supertest");
// const app = require("../app");


describe("get api route", () => {
	it("should return orders", (done) => {
		request(app)
			.get("/api/v1/orders")
			.expect(200)
			.end(done);
	});
	it("should return order with id ", (done) => {
		request(app)
			.get("/api/v1/orders/1")
			.expect(404)
			.end(done);
	});
});

describe("post api route", () => {
	it("should add orders", (done) => {
		request(app)
			.post("/api/v1/orders")
			.type("form")
			.send({ menu: "beans"})
			.expect(201)
			.end(done);
	});
});

describe("delete api route", () => {
	it("should delete orders", (done) => {
		request(app)
			.delete("/api/v1/orders/1")
			.type("form")
			.send({ menu: "beans"})
			.expect(200)
			.end(done);
	});
});

describe("put api route", () => {
	it("should update orders", (done) => {
		request(app)
			.put("/api/v1/orders")
			.expect(404)
			.end(done);
	});
});