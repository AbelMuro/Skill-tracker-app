import React, {useState, ChangeEvent, InvalidEvent, FocusEvent} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterEmail() {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const emailElement = e.target as HTMLInputElement;
        emailElement.setCustomValidity('');
        setEmail(emailElement.value);
        setError('');
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const emailElement = e.target as HTMLInputElement;
        const isEmpty = emailElement.validity.valueMissing;
        const isInvalid = emailElement.validity.typeMismatch;

        if(isEmpty){
            setError("Can't be empty.");
            emailElement.setCustomValidity(' ');
        }
        else if(isInvalid){
            setError('Email is invalid.');
            emailElement.setCustomValidity(' ');
        }
            
    }
    
    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
        const emailElement = e.target as HTMLInputElement;
        emailElement.setCustomValidity(' ');
        const isEmpty = emailElement.validity.valueMissing;

        if(isEmpty)
            setError("Can't be empty.");
        else
            setError('Email is invalid.');
    }

    return (
        <motion.fieldset layout className={styles.fieldset}>
            <motion.label layout className={styles.label}>
                Enter Email:
            </motion.label>
            <motion.input 
                type='email' 
                name='email'
                layout
                className={styles.email} 
                value={email} 
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

export default EnterEmail;