import React, {SubmitEvent} from 'react';
import EnterEmail from '~/Common/Components/EnterEmail';
import * as styles from './styles.module.css';

function Form () {
    
    const handleSubmit = async (e: SubmitEvent) => {
        try{
            const formElement = e.target as HTMLFormElement;
            const emailElement = formElement.elements.namedItem('email') as HTMLInputElement;
            const email = emailElement.value;

            const response = await fetch('http://localhost:4000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            });

            
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <EnterEmail/>
            <button className={styles.submit}>
                Send Reset Link
            </button>
        </form>
    )
}

export default Form;