import React, {useState, ChangeEvent, InvalidEvent, FocusEvent} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterName() {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nameElement = e.target as HTMLInputElement;
        nameElement.setCustomValidity('');
        setName(nameElement.value);
        setError('');
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const emailElement = e.target as HTMLInputElement;
        const isEmpty = emailElement.validity.valueMissing;

        if(isEmpty){
            setError("Can't be empty.");
            emailElement.setCustomValidity(' ');
        }
            
    }
    
    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
        const emailElement = e.target as HTMLInputElement;
        emailElement.setCustomValidity(' ');

        setError("Can't be empty.");
    }

    return (
        <motion.fieldset layout className={styles.fieldset}>
            <motion.label layout className={styles.label}>
                Enter Name:
            </motion.label>
            <motion.input 
                type='text' 
                name='name'
                layout
                className={styles.name} 
                value={name} 
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

export default EnterName;