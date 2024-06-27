import { useTodo } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todoList } = useTodo();
    const activeTodo = todoList.filter((todo) => !todo.isDone);

    return (
        <div className="overflow-x-auto max-w-md">
            <div className="mx-auto my-2  flex items-center space-x-3">
                <button className="btn btn-sm flex items-center">
                    Todo
                    <span className="badge badge-primary">
                        {todoList.length}
                    </span>
                </button>
                <button className="btn btn-sm flex items-center">
                    Completed
                    <span className="badge badge-primary">
                        {todoList.length - activeTodo.length}
                    </span>
                </button>
                <button className="btn btn-sm flex items-center">
                    Active
                    <span className="badge badge-primary">
                        {activeTodo.length}
                    </span>
                </button>
            </div>
            <table className="table">
                <thead>
                    <tr className="font-bold">
                        <th>Title</th>
                        <th>isDone</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList &&
                        todoList.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
