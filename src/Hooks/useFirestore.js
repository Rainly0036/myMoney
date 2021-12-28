import { useReducer, useEffect, useState } from 'react';
import { projectFirestore } from '../Firebase/config';

let initialState = {
    document: null, 
    isPending: false, 
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch(action.type) {
        case 'SET_DOCUMENT':
            return {
                ...state,
                document: action.payload
            }
        case 'SET_PENDING':
            return {
                ...state,
                isPending: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'SET_SUCCESS':
            return {
                ...state,
                success: action.payload
            }
        default:
            return state;
    }
}

export const useFirestore = (collection) => { 
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);
    const ref = projectFirestore.collection(collection);
    const addDocument = (doc) => {
        
    }
}