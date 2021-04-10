import React, {createContext, useEffect, useState} from 'react';
import fire from "../../firebase/fire";

const ParlourContext = createContext();
export const ParlourProvider = ({children}) => {
    const [parlours, setParlours] = useState([]);
    const [sortedParlours, setSortedParlours] = useState([]);
    
    //pass in the parluor we want and get it form array of parlours
    const getParlour = (slug) => {
        return parlours.find(item => item.slug === slug);
    }

    useEffect(() => {
        fire.firestore()
            .collection('Parlours')
            .onSnapshot((snapshot) => {
                const newParlours = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setParlours(newParlours);
                setSortedParlours(newParlours);
            })
    }, []);


    useEffect(() => {
        setSortedParlours(parlours);
    });
    

    return (
        <ParlourContext.Provider value={{
            parlours,
            sortedParlours,
            getParlour
        }}>
            {children}
        </ParlourContext.Provider>
    );
};

export default ParlourContext;
