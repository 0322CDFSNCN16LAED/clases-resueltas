const { Genre } = require("../../database/models");

module.exports = {
    list: async (req, res) => {
        const limit = 5;
        const offset =
            req.query.page && req.query.page > 0 ? req.query.page : 0;

        try {
            const { rows, count } = await Genre.findAndCountAll({
                limit: limit,
                offset: offset * limit,
                attributes: ["id", "name"],
            });

            res.status(200).json({
                meta: {
                    status: 200,
                    url: req.originalUrl,
                    total: count,
                },
                data: rows,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                meta: {
                    status: 500,
                    url: req.originalUrl,
                    errorName: error.name,
                    errorMsg: error.msg,
                },
            });
        }
    },
    detail: (req, res) => {},
    update: (req, res) => {},
};
