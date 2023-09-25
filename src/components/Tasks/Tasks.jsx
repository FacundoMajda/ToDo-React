import { Task } from "../Task/Task";
import styles from "./Tasks.css";

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
