import React, {createContext, useEffect, useState} from 'react';
import fire from "../../firebase/fire";

const ParlourContext = createContext();
export const ParlourProvider = ({children}) => {
    const [parlours, setParlours] = useState([]);
    const [sortedParlours, setSortedParlours] = useState([]);
    const [search, setSearch] = useState("");
    
    //pass in the parluor we want and get it form array of parlours
    const getParlour = (slug) => {
        return parlours.find(item => item.slug === slug);
    }

    useEffect(() => {
        const unsubscribe = fire.firestore()
            .collection('Parlours')
            .onSnapshot((snapshot) => {
                const newParlours = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setParlours(newParlours);
                setSortedParlours(newParlours);
            })
        return () => unsubscribe();
    }, []);

    useEffect(()=>{
        setSortedParlours(parlours.filter(item =>{
            return item.name.toLowerCase()
                       .includes(search.toLowerCase());
        }))
    },[search])

    

    return (
        <ParlourContext.Provider value={{
            parlours,
            sortedParlours,
            setSearch,
            getParlour
        }}>
            {children}
        </ParlourContext.Provider>
    );
};

export default ParlourContext;
