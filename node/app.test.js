import request from "supertest";

import app from "./app";


it("should return orders", (done) => {
	request(app)
		.get("/api/v1/orders")
		.expect(200)
		// .expect((res.body).toInclude({
		// 	id: 1,
		// 	menu: "Fried Rice",
		// 	restuarant: "one love",
		// 	location: "island"
		// }))
		.end(done);
});