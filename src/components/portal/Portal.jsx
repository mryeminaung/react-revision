import { useState } from "react";
import Modal from "./Modal";

const App = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <div className="m-4" onClick={(e) => console.log("Clicked")}>
                <h2 className="text-2xl">This is parent element.</h2>
                <button
                    data-modal-target="center-center-modal"
                    data-modal-toggle="center-center-modal"
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={onOpen}
                >
                    Toggle modal
                </button>
                <Modal onClose={onClose} open={open} />
                <div id="modal"></div>
            </div>
        </>
    );
};

export default App;
