import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const handleCount = () => setCount((preCount) => preCount + 1);

    return (
        <CounterContext.Provider value={{ count, handleCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => useContext(CounterContext);

export default CounterContext;
