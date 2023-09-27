


import React from "react";
import { useState } from "react";
import { BsFillCheckCircleFill, TbTrash } from "react-icons/bs";
import { Toaster, toast } from "sonner";
import styles from "./Task.css?inline";

function Task({ task, onDelete, onComplete }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  function renderCheckButton() {
    const handleComplete = () => {
      onComplete(task.id);

      setIsCompleted(true);
    };

    return (
      <button className={styles.checkContainer} onClick={handleComplete}>
        {isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
    );
  }

  function renderTitle() {
    return <p className={styles.textCompleted}>{task.title}</p>;
  }

  function renderDeleteButton() {
    return (
      <button className={styles.deleteButton} onClick={onDelete}>
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

export default Task;
