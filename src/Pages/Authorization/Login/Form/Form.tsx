import React, {SubmitEvent} from 'react';
import {motion} from 'framer-motion';
import EnterEmail from '~/Common/Components/EnterEmail';
import EnterPassword from '~/Common/Components/EnterPassword';
import * as styles from './styles.module.css';

function Form() {

    const handleSubmit = async (e: SubmitEvent) => {
        try{
            e.preventDefault();
            const formElement = e.target as HTMLFormElement;
            const emailElement = formElement.elements.namedItem('email') as HTMLInputElement;
            const passwordElement = formElement.elements.namedItem('password') as HTMLInputElement;
            const email = emailElement.value;
            const password = passwordElement.value;

            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const result = await response.text();
            console.log(result);

            
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }

    return(
        <motion.form layout className={styles.form} onSubmit={handleSubmit}>
            <EnterEmail/>
            <EnterPassword/>
            <motion.button layout className={styles.submit}>
                Submit
            </motion.button>
        </motion.form>            
    )
}

export default Form;