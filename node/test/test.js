// "use strict";

// const chai = require("chai");
// const expect = require("chai").expect;

// chai.use(require("chai-http"));

// const app = require("../app.js"); // app

// describe("API endpoint /api/v1/orders", () => {
// 	this.timeout(5000); // How long to wait for a response(ms)

// 	before(() => {

// 	});

// 	after(() => {

// 	});

// 	//GET - List of all orders
// 	it("should return all orders", () => {
// 		return chai.request(app)
// 			.get("/api/v1/orders")
// 			.then((res) => {
// 				expect(res).to.have.status(200);
// 				expect(res).to.be.json;
// 				expect(res.body).to.be.an("object");
// 				expect(res.body.results).to.be.an("array");
// 			});
// 	});

// 	//GET Invalid path
// 	it("should return not found", () => {
// 		return chai.request(app)
// 			.get("/invalid path")
// 			.then((res) => {
// 				throw new Error("Path exists");
// 			})
// 			.catch((err) => {
// 				expect(err).to.have.status(404);
// 			});
// 	});


// 	//POST 
// 	it("should add new color", () => {
// 		return chai.request(app)
// 			.post("/api/v1/orders")
// 			.send({
// 				"id": 3,
// 				"menu": "amala",
// 				"restuarant": "the place",
// 				"location": "egbeda"
// 			})
// 			.then((res) => {
// 				expect(res).to.have.status(201);
// 				expect(res).to.be.json;
// 				expect(res.body).to.be.an("object");
// 				expect(res.body.results).to.be.an("array").that.includes({
// 					"id": 3,
// 					"menu": "amala",
// 					"restuarant": "the place",
// 					"location": "egbeda"
// 				});
// 			});
// 	});

// 	//POST -Bad Request
// 	it("should return Bad Request", () => {
// 		return chai.request(app)
// 			.post("/api/v1/orders")
// 			.type("form")
// 			.send({
// 				"id": 3,
// 				"menu": "amala",
// 				"restuarant": "the place",
// 				"location": "egbeda"
// 			})
// 			.then((res) => {
// 				throw new Error("Invalid content type!");
// 			})
// 			.catch((err) => {
// 				expect(err).to.have.status(400);
// 			});
// 	});
// });
