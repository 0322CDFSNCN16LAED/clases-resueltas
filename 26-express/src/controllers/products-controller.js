const path = require("path");
const fs = require("fs");
const db = require("../models/products");
const products = db.getAll();

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products", {
            products: products,
        });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        res.render("detail", {
            product: db.getOne(req.params.id),
        });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("product-create-form");
    },

    // Create -  Method to store
    store: (req, res) => {
        const newProduct = req.body;
        if (products.length) {
            newProduct.id = products[products.length - 1].id + 1;
        } else {
            newProduct.id = 1;
        }

        newProduct.image = "default-image.png";

        products.push(newProduct);

        db.saveAll(products);

        res.redirect("/products");
    },

    // Update - Form to edit
    edit: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find((product) => product.id == id);

        res.render("product-edit-form", {
            productToEdit: productToEdit,
            categories: [
                {
                    name: "En oferta",
                    value: "in-sale",
                },
                {
                    name: "Visitado",
                    value: "visited",
                },
            ],
        });
    },
    // Update - Method to update
    update: (req, res) => {
        const productIndex = products.findIndex((p) => p.id == req.params.id);

        const product = products[productIndex];

        product.name = req.body.name;
        product.description = req.body.description;
        product.category = req.body.category;
        product.price = req.body.price;
        product.discount = req.body.discount;

        if (req.file) {
            const rutaAbsoluta = path.join(
                __dirname,
                "../../public/images/products",
                product.image
            );
            fs.unlinkSync(rutaAbsoluta);
            product.image = req.file.filename;
        }

        db.saveAll(products);

        res.redirect("/products");
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        const filteredProducts = products.filter((p) => {
            return p.id != req.params.id;
        });

        db.saveAll(filteredProducts);

        res.redirect("/products");
    },
};

module.exports = controller;
