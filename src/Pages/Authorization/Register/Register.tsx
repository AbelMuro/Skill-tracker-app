import React from 'react';
import {useNavigate} from 'react-router-dom';
import {motion, LayoutGroup} from 'framer-motion';
import Form from './Form';
import * as styles from './styles.module.css';

function Register() {
    const navigate = useNavigate();

    const handleLink = () => {
        navigate('/login');
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.div layout className={styles.register}>
                    <motion.h1 layout>
                        Register
                    </motion.h1>
                    <motion.p layout>
                        Please enter a password with at least 1 number, 1 symbol, 1 letter and 6 or more characters.
                    </motion.p>
                    <Form/>
                    <motion.p layout className={styles.login}>
                        Already have an account? Login <a onClick={handleLink}>here</a>
                    </motion.p>
                </motion.div>               
            </LayoutGroup>

        </section>
    )
}

export default Register;