import { useState } from 'react';
import { projectAuth } from '../Firebase/config'
import { useAuthContext } from './useAuthContext';

const useLogOut = () => { 
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logOut = () => {
        setError(null);
        setIsPending(true);
    }
}