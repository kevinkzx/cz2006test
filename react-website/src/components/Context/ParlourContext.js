import React, {createContext, useEffect, useState} from 'react';
import items from "../Parlour/Data";

const ParlourContext = createContext();
export const ParlourProvider = ({children}) => {
    const [parlours] = useState(items);
    const [sortedParlours, setSortedParlours] = useState(items);
    const [orders, setOrders] = useState([]); 

    useEffect(() => {
        localStorage.setItem('myorders', JSON.stringify(orders))
    }, [orders]);
    
    //pass in the parlour we want and get it form array of parlours
    const getParlour = (slug) => {
        return parlours.find(item => item.slug === slug);
    };

    
    useEffect(() => {
        setSortedParlours(parlours);
    });
    

    return (
        <ParlourContext.Provider value={{
            parlours,
            sortedParlours,
            //setSortedParlours,
            orders,
            setOrders,
            getParlour
        }}>
            {children}
        </ParlourContext.Provider>
    );
};

export default ParlourContext;
