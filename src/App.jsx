import { TodoContextProvider } from "./context/TodoContext";
import Todo from "./components/todo/Todo";

const App = () => {
    return (
        <TodoContextProvider>
            <Todo />
        </TodoContextProvider>
    );
};

export default App;
