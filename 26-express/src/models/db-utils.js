const fs = require("fs");

module.exports = {
    readJsonDB: (filePath) => {
        return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    },
    writeJsonDB: (filePath, entities) => {
        const fileTxt = JSON.stringify(entities, null, 4);
        fs.writeFileSync(filePath, fileTxt);
    },
};
