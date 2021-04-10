import React, {createContext, useEffect, useState} from 'react';
import items from "../Parlour/Data";

const ParlourContext = createContext();
export const ParlourProvider = ({children}) => {
    const [parlours] = useState(items);
    const [sortedParlours, setSortedParlours] = useState(items);
    const [search, setSearch] = useState("");
    
    //pass in the parluor we want and get it form array of parlours
    const getParlour = (slug) => {
        return parlours.find(item => item.slug === slug);
    }


    useEffect(() => {
        // setSortedParlours(parlours);
        setSortedParlours(parlours.filter(parlour => {
            return parlour.name.toLowerCase()
                          .includes(search.toLowerCase());
        }))
    }, [search, sortedParlours]);
    

    return (
        <ParlourContext.Provider value={{
            parlours,
            sortedParlours,
            setSearch,
            //setSortedParlours,
            getParlour
        }}>
            {children}
        </ParlourContext.Provider>
    );
};

export default ParlourContext;
