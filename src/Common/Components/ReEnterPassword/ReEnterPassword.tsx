import React, {useState, ChangeEvent, InvalidEvent, FocusEvent} from 'react';
import icons from '~/Common/icons';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

type Props = {
    name: string,
    label: string
}

function ReEnterPassword({name, label} : Props) {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);

    const handleVisible = () => {
        setVisible(true);
    }

    const handleInvisible = () => {
        setVisible(false);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const passwordElement = e.target as HTMLInputElement;
        passwordElement.setCustomValidity('');
        setPassword(passwordElement.value);
        setError('');
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const passwordElement = e.target as HTMLInputElement;
        const isEmpty = passwordElement.validity.valueMissing;
        const patternMismatch = passwordElement.validity.patternMismatch;

        if(isEmpty){
            setError("Can't be empty.");
            passwordElement.setCustomValidity(' ');
        }   

        else if(patternMismatch){
            setError("Password doesn't meet the requirements");
            passwordElement.setCustomValidity(' ');
        }

    }
    
    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
        const passwordElement = e.target as HTMLInputElement;
        passwordElement.setCustomValidity(' ');
        const isEmpty = passwordElement.validity.valueMissing;

        if(isEmpty)
            setError("Can't be empty.");
        else 
            setError("Password doesn't meet the requirements");
    }

    return (
        <motion.fieldset layout className={styles.fieldset}>
            <motion.label className={styles.label} layout>
                {label}
            </motion.label>
            <motion.fieldset layout className={styles.input_container}>
                <input 
                    type={visible ? 'text' : 'password'} 
                    pattern={'[a-zA-Z0-9!@#$%^&*?].{6,}'}
                    name={name}
                    className={styles.password} 
                    value={password} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    required
                    />
                {visible ? <button className={styles.eye} onClick={handleInvisible} type='button'>
                    <img src={icons['closedEye']}/>
                </button> : <button className={styles.eye} onClick={handleVisible} type='button'>
                    <img src={icons['openEye']}/>
                </button>}
                
            </motion.fieldset>

            {
                error && 
                    <motion.p layout className={styles.error_message} initial={{opacity: 0}} animate={{opacity: 1}}>
                        {error}
                    </motion.p>
            }
        </motion.fieldset>
    )
}

export default ReEnterPassword;