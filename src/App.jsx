import React from "react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import "./components/styles/global.css";

//-------------//

//todo:tasks". clave para almacenar la lista de tareas del usuario.
//clave de almacenamiento local para el conjunto de datos guardados
const LOCAL_STORAGE_KEY = "todo:tasks";

//-------------//

//Componente App
function App() {
  const [tasks, setTasks] = useState([]);
  //-------------//
  // Carga las tareas guardadas del almacenamiento local.
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }
  //-------------//
  // Guarda las tareas en el almacenamiento local.
  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
  //-------------//

  // useEffect se ejecuta una vez, luegp de que el componente se haya renderizado
  useEffect(() => {
    loadSavedTasks();
  }, []);

  //-------------//

  // Agrega una nueva tarea a la lista de tareas.
  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  //-------------//
  // Elimina una tarea de la lista de tareas por su id.
  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  //-------------//
  // Cambia el estado de finalización de una tarea por su id.
  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}
export default App;
