import { createContext, useContext, useState } from "react";

const CountTaskContext = createContext();

const CountTaskProvider = ({ children }) => {
    const [taskNumber, setTaskNumber] = useState(0);

    const transferTaskNumber = (number) => {
        setTaskNumber(number);
    };

    return (
        <CountTaskContext.Provider value={{ taskNumber, transferTaskNumber }}>
            {children}
        </CountTaskContext.Provider>
    );
};

export const useTaskNum = () => useContext(CountTaskContext);

export default CountTaskProvider;