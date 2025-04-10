import styles from "./EmptyAnimation.module.css";
import emptyImage from "../assets/emptyImage.jpg"; // path ko sahi set karo

function EmptyAnimation() {
  return (
    <div className={styles.emptyWrapper}>
      <img src={emptyImage} alt="Empty Task" className={styles.image} />
      <p className={styles.text}>
        No Tasks Found! <br /> Please Add Task And Grow With Taskify!
      </p>
    </div>
  );
}

export default EmptyAnimation;
