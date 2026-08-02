import React from 'react';
import Form from './Form'
import {useNavigate} from 'react-router-dom';
import {motion, LayoutGroup} from 'framer-motion';
import * as styles from './styles.module.css';

function Login() {
    const navigate = useNavigate();

    const handleLink = () => {
        navigate('/register');
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.div layout className={styles.login}>
                    <motion.h1 layout>
                        Forgot Password
                    </motion.h1>
                    <motion.p layout>
                        Please enter your email, and you will receive a link to reset your password.
                    </motion.p>
                    <Form/>
                    <motion.p layout className={styles.signup}>
                        Remember your password? Click <a onClick={handleLink}>here</a>
                    </motion.p>
                </motion.div>               
            </LayoutGroup>

        </section>
    )
}

export default Login;