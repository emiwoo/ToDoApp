import styles from './styles/RegisterPage.module.css';

function RegisterPage() {
    return(
        <form className={styles.registerForm}>
            <label>Register</label>
            <input placeholder='Username' />
            <input placeholder='Password' />
            <button>Register</button>
        </form>
    );
}

export default RegisterPage;