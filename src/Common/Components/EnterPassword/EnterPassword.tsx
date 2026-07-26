import React, {useState, ChangeEvent, InvalidEvent, FocusEvent} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterPassword() {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const passwordElement = e.target as HTMLInputElement;
        passwordElement.setCustomValidity('');
        setPassword(passwordElement.value);
        setError('');
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const passwordElement = e.target as HTMLInputElement;
        const isEmpty = passwordElement.validity.valueMissing;

        if(isEmpty){
            setError("Can't be empty.");
            passwordElement.setCustomValidity(' ');
        }   
    }
    
    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
        const passwordElement = e.target as HTMLInputElement;
        passwordElement.setCustomValidity(' ');
        const isEmpty = passwordElement.validity.valueMissing;

        if(isEmpty)
            setError("Can't be empty.");
    }

    return (
        <motion.fieldset layout className={styles.fieldset}>
            <motion.label className={styles.label} layout>
                Enter Password:
            </motion.label>
            <motion.input 
                layout
                type='password' 
                name='password'
                className={styles.password} 
                value={password} 
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required
                />
            {
                error && 
                    <motion.p layout className={styles.error_message} initial={{opacity: 0}} animate={{opacity: 1}}>
                        {error}
                    </motion.p>
            }
        </motion.fieldset>
    )
}

export default EnterPassword;