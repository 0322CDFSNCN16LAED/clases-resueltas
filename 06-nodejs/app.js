const funciones = require("./tasks");

const { listar, leerTareasJSON } = funciones;

const action = process.argv[2];
// Tenemos una variable que se llama 'action'
// Y puede venir con el valor 'listar', vacia (undefined), o
// con cualquier otro valor
// Si viene con el valor 'listar'
// Listar las tareas (como hicimos arriba)

// Si viene con el valor 'crear'
// obtengo el nombre de la tarea del 3er parametro
// creo una nueva tarea con ese titulo y el estado 'pendiente'
// llamo a la funcion guardarTarea con esa tarea nueva

// Si viene vacia
// Imprimir "Atención - Tienes que pasar una acción."
// Si viene con cualquier otro valor
// Imprimir: "No entiendo qué quieres hacer."
switch (action) {
  case "listar": {
    const tasks = leerTareasJSON();
    listar(tasks);
    break;
  }
  case "crear": {
    const titulo = process.argv[3];
    funciones.guardarTarea({
      title: titulo,
      state: "pendiente",
    });
    console.log("Se creo tu tarea: '" + titulo + "'");
    break;
  }
  case "filtrar": {
    const estado = process.argv[3];
    funciones.filtrarTareas(estado);
    break;
  }
  case undefined: {
    console.log("Atención - Tienes que pasar una acción.");
    break;
  }
  default: {
    console.log("No entiendo qué quieres hacer.");
  }
}
