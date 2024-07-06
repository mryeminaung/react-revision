import { useState } from "react";

const withCounter = (Component) => {
    console.log(Component);

    return (props) => {
        const [count, setCount] = useState(0);

        const handleCount = () => setCount((preCount) => preCount + 1);

        // props -> props of wrapped component
        console.log(props);

        // passed by merging original props and additional props to enhance our original component

        return <Component count={count} handleCount={handleCount} {...props} />;
    };
};

export default withCounter;
