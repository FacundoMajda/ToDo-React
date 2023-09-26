import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import { toast } from "sonner";
import styles from "./Tasks.css?inline";

// Componente Task
export function Tasks({ tasks, onDelete, onComplete }) {
  // Renderiza un boton
  function renderCheckButton(task) {
    const handleComplete = () => {
      onComplete(task.id);
    };

    return (
      <button className={styles.checkContainer} onClick={handleComplete}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
    );
  }

  // Renderiza el title de la tarea
  function renderTitle(task) {
    return (
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
    );
  }

  // Renderiza el boton 'trash'
  function renderDeleteButton(task) {
    const handleDelete = () => {
      onDelete(task.id);
    };

    return (
      <button className={styles.deleteButton} onClick={handleDelete}>
        <TbTrash size={20} />
      </button>
    );
  }

  return (
    <div className="task-button">
      {tasks.map((task) => (
        <div key={task.id} className={styles.task}>
          {renderCheckButton(task)}
          {renderTitle(task)}
          {renderDeleteButton(task)}
        </div>
      ))}
    </div>
  );
}
