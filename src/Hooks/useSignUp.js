import { useState, useEffect } from 'react';
import { projectAuth } from '../Firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext()

    const signUp = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);
        try {
            if (!email) {
                setError('Email is required.');
                return setIsPending(false);
            } else if (!password) {
                setError('Password is required.');
                return setIsPending(false);
            } else if (!displayName) {
                setError('Please enter a display name.');
                return setIsPending(false);
            }

            // CREATE EMAIL AND PASSWORD
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);

            if (!res) {
                throw new Error('User not found');
            }

            // ADD DISPLAY NAME
            await res.user.updateProfile({ displayName });

            dispatch({ type: "LOGIN", payload: res.user })

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
            
        }

        catch (err) { 
            if (!isCancelled) {
                console.log(err.message)
                setError(err.message);
                setIsPending(false);
            }
            
        }
    }


    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])


    return { signUp, error, isPending }
}