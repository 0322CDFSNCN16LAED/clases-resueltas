module.exports = (req, res, next) => {
    next();

    console.log(
        `[${new Date().toLocaleString("es")}] (${req.method}) ${
            res.statusCode
        } - ${req.originalUrl}`
    );
};
