const fs = require("fs");

module.exports = {
  listar: function (taskList) {
    /// recorrer el array de tareas en 'tasks'
    /// y por cada elemento 'task'
    // Imprimir un string con el titulo y el estado
    taskList.forEach((task) => {
      console.log(task.title + " - " + task.state);
    });
  },
  leerTareasJSON: function () {
    //leer el texto que está adentro del archivo
    // fs.readFileSync(caminoAlArchivo,'utf-8')
    // guardarlo en una variable 'tasksJsonData'
    const tasksJsonData = fs.readFileSync("./tasks.json", "utf-8");

    // 'parsear' ese texto a datos de javascript
    // JSON.parse(texto) // JSON.stringify(datos)
    // y guardarlo en una variable 'tasks'
    const tasks = JSON.parse(tasksJsonData);

    return tasks;
  },
  escribirTareasJSON: function (tasks) {
    //convertir ese array (tasks) a formato json (STRING) JSON.stringify
    const tasksJsonData = JSON.stringify(tasks, null, 4);
    // escribir ese string al archivo tasks.json
    fs.writeFileSync("./tasks.json", tasksJsonData, "utf-8");
  },

  guardarTarea: function (tarea) {
    //leer el JSON y obtener las tareas
    const tareas = this.leerTareasJSON();

    //agregar la tarea nueva al array de tareas
    tareas.push(tarea);

    //guardar las tareas (con la tarea nueva) en el JSON
    this.escribirTareasJSON(tareas);
  },

  filtrarTareas: function (estado) {
    //leer el JSON y obtener las tareas
    const tareas = this.leerTareasJSON();

    //filtrar esas tareas por el estado
    const tareasFiltradas = tareas.filter((tarea) => {
      return tarea.state == estado;
    });

    //listar esas tareas filtradas (usando la function this.listar)
    this.listar(tareasFiltradas);
  },
};
