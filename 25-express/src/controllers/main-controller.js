const controller = {
    index: (req, res) => {
        throw new Error("Do the magic!");
    },
    search: (req, res) => {
        throw new Error("Do the magic!");
    },

    create: (req, res) => {
        // enviar un html con el formulario
        res.render();
    },
    store: (req, res) => {
        // datos del formulario (req.body)
        // las imagenes req.file (1 sola) o req.files
        // base de datos -> array de objetos producto
        // creo un nuevo producto con los datos del body
        // calculo el id del nuevo producto
        // le agrego el url de la imagen al nuevo producto
        // agregar el producto a ese array
        // persistir el array <- guardo el array en un archivo
        // redirecciono al usuario a un url especifico
    },
};

module.exports = controller;
