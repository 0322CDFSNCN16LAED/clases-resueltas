module.exports = (req, res, next) => {
    res.locals.loggedUser = req.session.loggedUser;
    next();
};
