const path = require("path");
const express = require("express");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

const mainRouter = require("./routes/main-router"); // Rutas main
app.use("/", mainRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        path: req.path,
        error: err,
    });
});
