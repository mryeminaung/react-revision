import { useEffect } from "react";
import { useTodo } from "../../context/TodoContext";
import axios from "axios";

const EditTodo = () => {
    const { editTask, setTodoList, setEditTask, setModal } = useTodo();

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27) {
                setModal(false);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div>
            <dialog id="my-modal" className="modal modal-middle">
                <div className="modal-box">
                    {/* <div className="modal-action"> */}
                    <form
                        method="dialog"
                        onSubmit={(e) => {
                            e.preventDefault();
                            axios.patch(
                                `http://localhost:8000/todoList/${editTask.id}`,
                                editTask
                            );
                            setTodoList((pre) => [
                                ...pre.map((item) =>
                                    item.id === editTask.id
                                        ? { ...item, editTask }
                                        : item
                                ),
                            ]);
                            setModal(false);
                        }}
                    >
                        {/* if there is a button in form, it will close the modal */}
                        <input
                            type="text"
                            value={editTask && editTask.title}
                            onChange={(e) =>
                                setEditTask((pre) => ({
                                    ...pre,
                                    title: e.target.value,
                                }))
                            }
                            placeholder="Type here"
                            className="input input-bordered w-full"
                        />
                        <div className="flex justify-end mt-2 items-center space-x-4">
                            <button
                                className="btn btn-outline btn-primary"
                                type="button"
                                onClick={() => setModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-outline btn-primary"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                    {/* </div> */}
                </div>
            </dialog>
        </div>
    );
};

export default EditTodo;
