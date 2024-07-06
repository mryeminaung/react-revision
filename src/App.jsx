import { CounterContextProvider, useCounter } from "./context/CounterContext";
import withCounter from "./components/higherOrderTest/withCounter";
import { useState } from "react";

const Test1 = (props) => {
    return (
        <div className="max-w-md border p-4">
            <p>Test1 : {props.count}</p>
            <button className="btn btn-sm" onClick={props.handleCount}>
                Click 1
            </button>
        </div>
    );
};

const Test2 = (props) => {
    console.log(props);
    return (
        <div className="max-w-md border p-4">
            <p>Test2 : {props.count}</p>
            <button className="btn btn-sm" onClick={props.handleCount}>
                Click 2
            </button>
        </div>
    );
};

const Test3 = () => {
    const { count, handleCount } = useCounter();

    return (
        <div className="max-w-md border p-4">
            <p>Test3 : {count}</p>
            <button className="btn btn-sm" onClick={handleCount}>
                Click 3
            </button>
        </div>
    );
};

const Test4 = () => {
    const { count, handleCount } = useCounter();
    return (
        <div className="max-w-md border p-4">
            <p>Test4 : {count}</p>
            <button className="btn btn-sm" onClick={handleCount}>
                Click 4
            </button>
        </div>
    );
};

const Test5 = ({ count, handleCount }) => {
    return (
        <div className="max-w-md border p-4">
            <p>Test5 : {count}</p>
            <button className="btn btn-sm" onClick={handleCount}>
                Click 5
            </button>
        </div>
    );
};

const Test6 = ({ count, handleCount }) => {
    return (
        <div className="max-w-md border p-4">
            <p>Test6 : {count}</p>
            <button className="btn btn-sm" onClick={handleCount}>
                Click 6
            </button>
        </div>
    );
};

const LiftingUp = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => setCount((preCount) => preCount + 1);

    return (
        <>
            <Test5 count={count} handleCount={handleCount} />
            <Test6 count={count} handleCount={handleCount} />
        </>
    );
};

const App = () => {
    const Test1Wrapped = withCounter(Test1);
    const Test2Wrapped = withCounter(Test2);

    return (
        <div className="space-y-10 m-2">
            <h2 className="text-2xl font-bold">Higher Order Components</h2>
            <Test1Wrapped name="Test1" />
            <Test2Wrapped name="Test2" />
            
            <h2 className="text-2xl font-bold">Context API</h2>
            <CounterContextProvider>
                <Test3 />
                <Test4 />
            </CounterContextProvider>

            <h2 className="text-2xl font-bold">State Lifting Up</h2>
            <LiftingUp />
        </div>
    );
};

export default App;

/* 
 - Accept a component
 - return a new or enhance component with additional props or behaviors
 - two approaches to implement HOCs
    1. Passing the original component as a parameter
    2. Render props
 - 

*/
