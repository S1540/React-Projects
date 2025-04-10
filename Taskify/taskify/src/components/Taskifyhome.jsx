import EmptyAnimation from "./EmptyAnimation";
import styles from "./Taskifyhome.module.css";
function TaskifyHome({ value, deleteHandler }) {
  return (
    <>
      {value.length === 0 ? (
        <EmptyAnimation></EmptyAnimation>
      ) : (
        <div className={`${styles.container}`}>
          <ul className={`list-group ${styles.groupstyle}`}>
            {value.map((item, index) => (
              <li key={index} className={`list-group-item  ${styles.bgColor}`}>
                {item.task}
                <span className={`${styles.dateList}`}>{item.date}</span>
                <span>
                  <button
                    type="button"
                    className={`btn btn-danger ${styles.btnDelete}`}
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default TaskifyHome;
