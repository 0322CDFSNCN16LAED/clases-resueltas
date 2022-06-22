module.exports = (req, res, next) => {
    next();

    console.log(
        `[${new Date().toLocaleString("es")}] [${
            req.session.loggedUser ? req.session.loggedUser.id : "anonymous"
        }] (${req.method}) ${res.statusCode} - ${req.originalUrl}`
    );
};
