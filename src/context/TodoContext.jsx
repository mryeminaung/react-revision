import { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

const initialTodoList = JSON.parse(localStorage.getItem("todoList")) || [];

const reducer = (state, action) => {
    switch (action.type) {
        case "addTodo":
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: action.payload.title,
                    isDone: action.payload.isDone,
                },
            ];

        case "editTodo":
            return state.map((todo) => {
                return todo.id === action.editId
                    ? { ...todo, title: action.payload }
                    : todo;
            });

        case "deleteTodo":
            return [...state.filter((todo) => todo.id !== action.payload)];

        case "isDone":
            return state.map((todo) => {
                return todo.id === action.doneId
                    ? { ...todo, isDone: action.checked }
                    : todo;
            });
            
        default:
            return state;
    }
};

export const TodoContextProvider = ({ children }) => {
    const [todoList, dispatch] = useReducer(reducer, initialTodoList);
    const [editTask, setEditTask] = useState("");
    const [modal, setModal] = useState(false);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        console.log(todoList);
    }, [todoList]);

    useEffect(() => {
        let dialog = document.getElementById("my-modal");
        modal ? dialog.showModal() : dialog.close();
    }, [modal]);

    return (
        <TodoContext.Provider
            value={{
                todoList,
                dispatch,
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
