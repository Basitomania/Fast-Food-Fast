
import db from "../db/db";
import users from "../db/user"
// const db = require("../db/db");

class OrdersController {
	getAllOrders(req, res) {
		return res.status(200).send({
			success: "true",
			message: "orders retrived successfully",
			orders: db,
		});
	}

	getOrder(req, res) {
		const id = parseInt(req.params.id, 10);
		db.map((order) => {
			if (order.id === id) {
				return res.status(200).send({
					success: "true",
					message: "order retrieved successfully",
					order
				});
			}
		});

		return res.status(404).send({
			success: "false",
			message: `order with the id ${id} does not exist`
		});
	}

	createOrder(req, res) {
		if (!req.body.menu) {
			return res.status(400).send({
				success: "false",
				message: "menu is required"
			});
		} else if (!req.body.restuarant) {
			return res.status(400).send({
				success: "false",
				message: "restuarant is required"
			});
		} else if (!req.body.location) {
			return res.status(400).send({
				success: "false",
				message: "location is required"
			});
		}
		const order = {
			id: db.length + 1,
			menu: req.body.menu,
			restuarant: req.body.restuarant,
			location: req.body.location
		};
		db.push(order);
		return res.status(201).send({
			success: "true",
			message: "orders added successfully",
			order
		});
	}

	updateOrder(req, res) {
		const id = parseInt(req.params.id, 10);
		let orderFound;
		let itemIndex;
		let newOrder;
		db.map((order, index) => {
			if (order.id === id) {
				orderFound = order;
				itemIndex = index;
			}
		});
		if (!orderFound) {
			return res.status(404).send({
				success: "false",
				message: "order not found"
			});
		}
		if (!req.body.menu) {
			return res.status(400).send({
				success: "false",
				message: "menu is required"
			});
		} else if (!req.body.restuarant) {
			return res.status(400).send({
				success: "false",
				message: "restuarant is required"
			});
		} else if (!req.body.location) {
			return res.status(400).send({
				success: "false",
				message: "location is required"
			});
		}

		const updatedOrder = {
			id: orderFound.id,
			menu: req.body.menu || orderFound.menu,
			restuarant: req.body.restuarant || orderFound.restuarant,
			location: req.body.location || orderFound.location
		};
		db.splice(itemIndex, 1, newOrder);

		return res.status(201).send({
			success: "true",
			message: "order updated successfully",
			updatedOrder
		});
	}

	deleteOrder(req, res) {
		const id = parseInt(req.params.id, 10);
		db.map((order, index) => {
			if (order.id === id) {
				db.splice(index, 1);
				return res.status(200).send({
					success: "true",
					message: "order was successfully deleted"
				});
			}
		});
		return res.status(404).send({
			success: "false",
			message: "order not found"
		});
	}

	signIn(req, res) {
        if(!req.body.username || !req.body.password) {
            return res.status(400)
                .send("You need a username and a password");
        }

        const user = users.find((u) => {
            return u.username === req.body.username && u.password === req.body.password;
        });

        if(!user){
            return res.status(401)
            .send("user not found");
        }

        const token = jwt.sign({
            sub: user.id,
            username: user.username
        }, "mysupersecretkey", {expiresIn: "3 hours"});

        res.status(200)
        .send({access_token: token});
        }
}

const orderController = new OrdersController();

export default orderController;
// module.exports = orderController;