import Todo from "./components/todo/Todo";
import { TodoContextProvider } from "./context/TodoContext";

const App = () => {
    return (
        <TodoContextProvider>
            <Todo />
        </TodoContextProvider>
    );
};

export default App;
