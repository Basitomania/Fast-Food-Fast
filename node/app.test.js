import request from "supertest";

import { app } from "./app";


it("should return orders", (done) => {
	request(app)
		.get("/api/v1/orders")
		.expect([{
			id: 1,
			menu: "Fried Rice",
			restuarant: "one love",
			location: "island"
		},
		{
			id: 2,
			menu: "Rice",
			restuarant: "hunters",
			location: "oshodi"
		},
		{
			id: 3,
			menu: "amala",
			restuarant: "the place",
			location: "egbeda"
		}
		])
		.end(done);
});