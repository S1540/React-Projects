import { useState, useEffect } from "react";
import styles from "./Inputfield.module.css";

function InputField({ setValue, value }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleOnTask = (event) => {
    setTask(event.target.value);
  };
  const handleOnDate = (event) => {
    setDate(event.target.value);
  };
  const handlAddButton = () => {
    if (task && date) {
      const newValue = { task, date };
      setValue((prev) => [...prev, newValue]);
      setDate("");
      setTask("");
    }
  };
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(value));
  }, [value]);

  return (
    <>
      <div className={`${styles.inputContainer}`}>
        <input
          className={`${styles.inputStyle}`}
          type="text"
          placeholder="Put Your Task"
          onChange={handleOnTask}
          value={task}
        />
        <input
          className={`${styles.inputStyle}`}
          type="date"
          onChange={handleOnDate}
          value={date}
        />

        <button
          type="button"
          className={`btn btn-info ${styles.btnStyle}`}
          onClick={handlAddButton}
        >
          Add
        </button>
      </div>
    </>
  );
}
export default InputField;
