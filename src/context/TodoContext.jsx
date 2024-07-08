import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [editTask, setEditTask] = useState("");
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/todoList")
            .then((res) => setTodoList(res.data));
    }, []);

    useEffect(() => {
        let dialog = document.querySelector("#my-modal");
        modal ? dialog.showModal() : dialog.close();
    }, [modal]);

    return (
        <TodoContext.Provider
            value={{
                todoList,
                setTodoList,
                editTask,
                setEditTask,
                modal,
                setModal,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);

export default TodoContext;
