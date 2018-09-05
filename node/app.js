import express from "express";
import db from "./db/db";
import bodyParser from "body-parser";

//setup the express app
const app = express();

//Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//get orders by id && get all orders
app.get("/api/v1/orders", (req, res) => {
    res.status(200).send({
        success: "true",
        message: "orders retrived successfully",
        orders: db
    })
});

app.get("/api/v1/orders/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    db.map((order) => {
        if (order.id === id) {
            return res.status(200).send({
                success: "true",
                message: "order retrieved successfully",
                order: order
            });
        }
    });
    return res.status(404).send({
        success: "false",
        message: `order with the menu ${menu} does not exist`
    });
});

//post orders
app.post("/api/v1/orders", (req, res) => {
    if(!req.body.menu) {
        return res.status(400).send({
            success: "false",
            message: "menu is required"
        });
    } else if (!req.body.restuarant) {
        return res.status(400).send({
            success: "false",
            message: "restuarant is required"
        });
    } else if(!req.body.location) {
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
    }
    db.push(order);
    return res.status(201).send({
        success: "true",
        message: "orders added successfully",
        order
    })
});

//delete specific order
app.delete("api/v1/orders/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    db.map((order, index) => {
        if(order.id === id) {
            db.splice(index, 1);
            return res.status(200).send({
                success: "true",
                message: "order was successfully deleted"
            });
        }
    });
    return res.status(404).send({
        success: "true",
        message: "order not found"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});