import { useState, useRef } from "react";
import "./Task.scss";
import ModalWindow from "../../ModalWindow/ModalWindow";

export default function Task({ task, onRemove, onToggleCheck, onEdit }) {
    const [editText, setEditText] = useState(task.task);
    const [bttnEdit, setBttnEdit] = useState(false);
    const [modalWindowOpen, setModalWindowOpen] = useState(false);
    const inputRef = useRef(null);

    function handleEditChange(e) {
        setEditText(e.target.value);
    }

    function handleEditBlur() {
        onEdit(task.id, editText);
        setBttnEdit(false);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            onEdit(task.id, editText);
            setBttnEdit(false);
        }
    }

    function handelrButtonClick() {
        setBttnEdit(true);
        setTimeout(() => inputRef.current?.focus(), 0);

    }

    return (
        <>
            <div className="element">
                <label>
                    <input
                        type="checkbox"
                        checked={task.isChecked}
                        onChange={() => onToggleCheck(task.id)}
                    />

                    {bttnEdit ? (
                        <input
                            className={task.isChecked ? "txst checked" : "txst"}
                            ref={inputRef}
                            name="task"
                            type="text"
                            onChange={handleEditChange}
                            onBlur={handleEditBlur}
                            onKeyDown={handleKeyDown}
                            value={editText}
                            required />
                    ) : (
                        <p className={task.isChecked ? "txst checked" : "txst"}>{task.task}</p>
                    )}

                    <p className="date__task">{task.date}</p>

                </label>
                {modalWindowOpen && (
                    <ModalWindow closeModal={() => setModalWindowOpen(false)} deleteСontent={() => onRemove(task.id)} />
                )}
                <button className="edit" onClick={handelrButtonClick}>✎</button>
                <button className="remove__btn" onClick={() => setModalWindowOpen(!modalWindowOpen)}>X</button>
            </div>
        </>
    )
}