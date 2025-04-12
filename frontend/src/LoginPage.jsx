import styles from './styles/RegisterAndLoginPages.module.css';

function LoginPage() {
    return(
        <>
            <form className={styles.registerForm}>
                <label>Login</label>
                <input placeholder='Username' />
                <input placeholder='Password' />
                <button>Login</button>
            </form>
            <p className={styles.errorMessage}>* Invalid login and password</p>
        </>
    );
}

export default LoginPage;