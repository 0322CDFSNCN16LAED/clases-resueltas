const controller = {
    index: (req, res) => {
        res.render("index");
    },
    search: (req, res) => {
        throw new Error("Do the magic!");
    },
};

module.exports = controller;
