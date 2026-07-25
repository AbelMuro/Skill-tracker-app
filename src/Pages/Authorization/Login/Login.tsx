import React from 'react';
import * as styles from './styles.module.css';

function Login() {
    return(
        <section className={styles.container}>
            <div className={styles.login}>
                <h1>
                    Login
                </h1>
                <p>
                    Please enter your email and password.
                </p>
            </div>
        </section>
    )
}

export default Login;