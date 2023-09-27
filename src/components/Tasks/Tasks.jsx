import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import styles from "./Tasks.css";

// Componente Task
export function Task({ task, onDelete, onComplete }) {
  // Renderiza un boton
  function renderCheckButton() {
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
  function renderTitle() {
    return (
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
    );
  }

  // Renderiza el boton 'trash'
  function renderDeleteButton() {
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
    <div className={styles.task}>
      {renderCheckButton()}
      {renderTitle()}
      {renderDeleteButton()}
    </div>
  );
}

// Componente Tasks
export function Tasks({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  // Renderiza la lista de tareas.
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tareas Creadas:</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Tareas Completadas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
}
