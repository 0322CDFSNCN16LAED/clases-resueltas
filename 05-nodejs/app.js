let fs = require("fs");

//leer el texto que está adentro del archivo
// fs.readFileSync(caminoAlArchivo,'utf-8')
// guardarlo en una variable 'tasksJsonData'
const tasksJsonData = fs.readFileSync("./tasks.json", "utf-8");

// 'parsear' ese texto a datos de javascript
// JSON.parse(texto) // JSON.stringify(datos)
// y guardarlo en una variable 'tasks'
const tasks = JSON.parse(tasksJsonData);

/// [en progreso] Estudiar Javascript
/// [pendiente] Hacer la cena
/// [terminada] Jugar al Age 2

/// recorrer el array de tareas en 'tasks'
/// y por cada elemento 'task'
// Imprimir un string con el titulo y el estado
const action = process.argv[2];

// Tenemos una variable que se llama 'action'
// Y puede venir con el valor 'listar', vacia (undefined), o
// con cualquier otro valor
// Si viene con el valor 'listar'
// Listar las tareas (como hicimos arriba)
// Si viene vacia
// Imprimir "Atención - Tienes que pasar una acción."
// Si viene con cualquier otro valor
// Imprimir: "No entiendo qué quieres hacer."

switch (action) {
  case "listar":
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      console.log(task.title + " - " + task.state);
    }
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
}
