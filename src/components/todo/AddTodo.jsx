import { useState } from "react";
import axios from "axios";
import { useTodo } from "../../context/TodoContext";

const AddTodo = () => {
    const [task, setTask] = useState({ title: "", isDone: false });
    const { setTodoList } = useTodo();

    return (
        <div className="max-w-[410px]">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const obj = axios.post("http://localhost:8000/todoList", {
                        ...task,
                    });
                    obj.then((res) => setTodoList((pre) => [...pre, res.data]));
                    setTask({ title: "", isDone: false });
                }}
            >
                <div className="mb-2 space-x-3 flex items-center">
                    <input
                        type="text"
                        placeholder="Type here"
                        value={task.title}
                        onChange={(e) =>
                            setTask((pre) => ({
                                ...pre,
                                title: e.target.value,
                            }))
                        }
                        className="input input-md input-bordered w-full"
                    />
                    <button type="submit" className="btn btn-outline btn-md">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
