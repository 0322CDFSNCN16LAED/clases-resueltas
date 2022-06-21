const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const mainRouter = require("./routes/main-router"); // Rutas main
const userLogs = require("./middlewares/user-logs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(userLogs);

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// app.use((req, res, next) => {
//     if (algoDeLaBaseDeDatos) {
//         res.send("Pagina bajo mantenimiento");
//     } else {
//         next();
//     }
// });

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
