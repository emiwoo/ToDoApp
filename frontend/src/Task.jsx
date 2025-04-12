import styles from './styles/Task.module.css';

function Task() {
    return (
        <section className={styles.task}>
            <div></div>
            <p className={styles.taskTitle}>Task. . .</p>
            <p className={styles.taskDate}>Date</p>
        </section>
    );
}

export default Task;