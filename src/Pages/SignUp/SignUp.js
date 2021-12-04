import styles from './SignUp.module.css'
import { useState } from 'react';
import { useSignUp } from '../../Hooks/useSignUp.js';
import ErrorBar from '../../Components/ErrorBar.js'

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signUp, error, isPending } = useSignUp()

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(email, password, displayName)
    }

    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Sign Up</h2>
            <label>
                <span>Email: </span>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                />
            </label>
            <label>
                <span>Password: </span>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Display Name: </span>
                <input 
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            {error && <ErrorBar errors={error} />}
            <br />
            {!isPending && <button className="btn">Sign Up</button>}
            {isPending && <button className="btn" disabled>Loading</button>}
        </form>
    )
}
