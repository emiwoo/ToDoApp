import styles from './styles/RegisterAndLoginPages.module.css';

function RegisterPage() {
    return(
        <>
            <form className={styles.registerForm}>
                <label>Register</label>
                <input placeholder='Username' />
                <input placeholder='Password' />
                <button>Register</button>
            </form>
            <p className={styles.errorMessage}>* Username already taken</p>
        </>
    );
}

export default RegisterPage;