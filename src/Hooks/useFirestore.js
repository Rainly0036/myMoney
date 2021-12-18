import { useReducer, useEffect, useState } from 'react';
import { projectFirestore } from '../Firebase/config';

export const useFirestore = (collection) => { 
    const [response, dispatch] = useReducer();
}