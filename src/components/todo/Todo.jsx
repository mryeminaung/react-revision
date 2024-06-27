import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import TodoList from "./TodoList";

const Todo = () => {
    return (
        <div className="m-3">
            <AddTodo />
            <TodoList />
            <EditTodo />
        </div>
    );
};

export default Todo;
