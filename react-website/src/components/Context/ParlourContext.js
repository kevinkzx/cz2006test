import React, {createContext, useEffect, useState} from 'react';
import fire from "../../firebase/fire";

const ParlourContext = createContext();
export const ParlourProvider = ({children}) => {
    //onst [parlours] = useState(items);
    //const [sortedParlours, setSortedParlours] = useState(items);
    const [orders, setOrders] = useState([]); 

    useEffect(() => {
        localStorage.setItem('myorders', JSON.stringify(orders))
    }, [orders]);
    const [search, setSearch] = useState("");
    const [parlours, setParlours] = useState([]);
    const [sortedParlours, setSortedParlours] = useState([]);
    
    //pass in the parlour we want and get it form array of parlours
    const getParlour = (slug) => {
        return parlours.find(item => item.slug === slug);
    };



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
            orders,
            setOrders,
            getParlour
        }}>
            {children}
        </ParlourContext.Provider>
    );
};

export default ParlourContext;
