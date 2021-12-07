import { useState, useEffect } from 'react';
import { useLogin } from '../../Hooks/useLogin';
import styles from './Login.module.css'
import ErrorBar from '../../Components/ErrorBar.js'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <h2>Login</h2>
            <label>
                <span>Email: </span>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                />
            </label>
            <label htmlFor="">
                <span>Password: </span>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {error && <ErrorBar errors={error} />}
            <br />
            {!isPending && <button className="btn">Login</button>}
            {isPending && <button className="btn" disabled>Loading</button>}
        </form>
    )
}
