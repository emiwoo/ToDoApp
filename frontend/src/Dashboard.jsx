import styles from './styles/Dashboard.module.css';
import CreateTaskInput from './CreateTaskInput.jsx';
import Task from './Task.jsx';

function Dashboard() {
    return (
        <main className={styles.wrapper}>
            <CreateTaskInput />
            <article className={styles.tasksHolder}>
                <Task />
            </article>
        </main>
    );
};  

export default Dashboard;