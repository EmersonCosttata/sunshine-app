
import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const AuthAddRemoveFav = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancelled, setCancelled] = useState(false);

    const checkIfIsCancelled = () => {
        if (cancelled) {
            return;
        }
    };

        const addFav = async (data,cole) => {
            console.log(cole)
            checkIfIsCancelled();
            setLoading(true);
            setError('');
            try {
     
            const collectionRef = collection(db, cole);


            const docRef = await addDoc(collectionRef, data);
        
  
            console.log('Documento adicionado com ID:', docRef.id);
            } catch (error) {
            setError('Erro ao adicionar dados ao BD, Tente mais tarde:', error);
            console.log(error)
            return
            }
            setLoading(false);
        };
        useEffect(() => {
            return () => setCancelled(true);
        }, []);
        
     return {addFav,error, loading}   
}