import { useTodo } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
    const { dispatch, setEditTask, setModal } = useTodo();

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
                            dispatch({
                                type: "isDone",
                                doneId: todo.id,
                                checked: e.target.checked,
                            });
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
                    onClick={() =>
                        dispatch({ type: "deleteTodo", payload: todo.id })
                    }
                    className="btn btn-sm btn-outline btn-error"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TodoItem;
