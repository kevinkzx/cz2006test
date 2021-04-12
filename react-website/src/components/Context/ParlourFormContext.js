import React, {createContext, useState} from "react";

export const ParlourFormContext = createContext();

export const ParlourFormProvider = ({children}) => {
    const [generalP, setGeneralP] = useState('');
    const [caskets, setCaskets] = useState('');
    const [address, setAddress] = useState('');

    return (
        <ParlourFormContext.Provider
            value={{
                generalP,
                caskets,
                address,
                setGeneralP,
                setCaskets,
                setAddress
            }}
        >
            {children}
        </ParlourFormContext.Provider>
    );
};
export default ParlourFormContext;