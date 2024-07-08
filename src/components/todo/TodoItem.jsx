import axios from "axios";
import { useTodo } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
    const { setTodoList, setEditTask, setModal } = useTodo();

    return (
        <tr>
            <td>
                <p className={todo.isDone ? "line-through" : ""}>
                    {todo.title}
                </p>
            </td>
            <th>
                <label>
                    <input
                        onChange={(e) => {
                            axios.patch(
                                `http://localhost:8000/todoList/${todo.id}`,
                                { isDone: e.target.checked }
                            );
                            setTodoList((pre) => [
                                ...pre.map((item) =>
                                    item.id === todo.id
                                        ? { ...item, isDone: e.target.checked }
                                        : item
                                ),
                            ]);
                        }}
                        checked={todo.isDone}
                        type="checkbox"
                        className="checkbox checkbox-success"
                    />
                </label>
            </th>
            <td className="flex space-x-2">
                <button
                    onClick={() => {
                        setEditTask(todo);
                        setModal(true);
                    }}
                    className="btn btn-sm btn-outline btn-warning"
                >
                    Edit
                </button>
                <button
                    onClick={() => {
                        axios.delete(
                            `http://localhost:8000/todoList/${todo.id}`
                        );
                        setTodoList((pre) => [
                            ...pre.filter((item) => item.id !== todo.id),
                        ]);
                    }}
                    className="btn btn-sm btn-outline btn-error"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TodoItem;
