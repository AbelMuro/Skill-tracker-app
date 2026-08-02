import React, {useState, SubmitEvent} from 'react';
import EnterEmail from '~/Common/Components/EnterEmail';
import ReEnterPassword from '~/Common/Components/ReEnterPassword';
import EnterName from './EnterName';
import {useNavigate} from 'react-router-dom';
import {useTypedDispatch} from '~/Store';
import {ClipLoader} from 'react-spinners';
import * as styles from './styles.module.css';

function Form() {
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e : SubmitEvent) => {
        try{    
            e.preventDefault();
            setLoading(true);
            const formElement = e.target as HTMLFormElement;
            const emailElement = formElement.elements.namedItem('email') as HTMLInputElement;
            const nameElement = formElement.elements.namedItem('name') as HTMLInputElement;
            const passwordElement = formElement.elements.namedItem('password') as HTMLInputElement;
            const reEnterPasswordElement = formElement.elements.namedItem('reEnterPassword') as HTMLInputElement;
            const password = passwordElement.value;
            const reEnterPassword = reEnterPasswordElement.value;
            const email = emailElement.value;
            const name = nameElement.value;

            if(password !== reEnterPassword)
                return setError("Password don't match");

            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, name, password})
            });

            const result = await response.text();
            console.log(result);

            if(response.status === 401)
                setError('Email already exists');
            else{
                navigate('/login');
                dispatch({type: 'DISPLAY_MESSAGE', payload: {message: 'Account created succesfully'}});
                setTimeout(() => {
                    dispatch({type: 'HIDE_MESSAGE'});
                }, 3000);
            }
                
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
        finally{
            setLoading(false);
        }

    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <EnterName/>
            <EnterEmail/>
            <ReEnterPassword name='password' label='Enter Password:'/>
            <ReEnterPassword name='reEnterPassword' label='Re-Enter Password:'/>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.submit}>
                {loading ? <ClipLoader size='30px' color='white'/> : 'Submit'}
            </button>
        </form>
    )
}

export default Form;