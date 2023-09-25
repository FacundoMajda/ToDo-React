import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import styles from "./Task.css";

//Componente Task
export function Task({ task, onDelete, onComplete }) {
  //-------------//
  // Renderiza un boton
  function renderCheckButton() {
    return (
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
    );
  }
  //-------------//
  // Renderiza el title de la tarea
  function renderTitle() {
    return (
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
    );
  }

  //-------------//
  // Renderiza el boton 'trash'
  function renderDeleteButton() {
    return (
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
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
