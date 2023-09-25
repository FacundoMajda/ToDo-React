import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import styles from "./Header.css";

//Componente Header
export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  //-------------//
  // Maneja el envío del formulario

  function handleSubmit(e) {
    e.preventDefault();

    //-------------//
    // Agrega la nueva tarea a la lista de tareas.

    handleAddTask(title);

    //-------------//
    // Limpia el campo de title de la nueva tarea.

    setTitle("");
  }

  //-------------//
  // Maneja el cambio del valor del campo de título de la nueva tarea.

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Agregar una nueva tarea"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Crear <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
