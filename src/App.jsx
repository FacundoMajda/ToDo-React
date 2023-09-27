import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import { Toaster, toast } from "sonner";
import "./components/styles/global.css";

// Clave para almacenar la lista de tareas en el almacenamiento local
const LOCAL_STORAGE_KEY = "todo:tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  // Carga las tareas guardadas del almacenamiento local.
  function loadSavedTasks() {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setTasks(JSON.parse(saved));
        toast.success("Tareas cargadas con éxito");
      }
    } catch (error) {
      console.error("Error al cargar las tareas:", error.message);
      toast.error("Error al cargar las tareas.");
    }
  }

  // Guarda las tareas en el almacenamiento local.
  function setTasksAndSave(newTasks) {
    try {
      setTasks(newTasks);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
      // toast.success("Tareas guardadas con éxito");
    } catch (error) {
      console.error("Error al guardar las tareas:", error.message);
      toast.error("Error al guardar las tareas.");
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  // Agregar una nueva tarea a la lista de tareas
  function addTask(taskTitle) {
    try {
      setTasksAndSave([
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isCompleted: false,
        },
      ]);
      toast.success("Nueva tarea agregada con éxito");
    } catch (error) {
      console.error("Error al agregar una nueva tarea:", error.message);
      toast.error("Error al agregar una nueva tarea.");
    }
  }

  // Eliminar una tarea de la lista de tareas por su id
  function deleteTaskById(taskId) {
    try {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      setTasksAndSave(newTasks);
      toast.error("Tarea eliminada con éxito");
    } catch (error) {
      console.error("Error al eliminar la tarea:", error.message);
      toast.error("Error al eliminar la tarea.");
    }
  }

  // Cambiar el estado de finalización de una tarea por su id
  function toggleTaskCompletedById(taskId) {
    try {
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
    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error.message);
      toast.error("Error al cambiar el estado de la tarea.");
    }
  }

  return (
    <>
      <Header handleAddTask={addTask} />

      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
      <Toaster richColors />
    </>
  );
}

export default App;
