import { useState } from "react";
import "./Task.scss";
export default function Task({ task, onRemove, onToggleCheck, onEdit}) {
    const [editText, setEditText] = useState(task.task);

    function handleEditChange(e) {
        setEditText(e.target.value);
    }

    function handleEditBlur() {
        onEdit(task.id, editText);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            onEdit(task.id, editText);
        }
    }

    return (
        <div className="element">
            <label>
                <input
                    type="checkbox"
                    checked={task.isChecked}
                    onChange={() => onToggleCheck(task.id)}
                />
                <input 
                className={task.isChecked ? "txst checked" : "txst"}
                name="task" 
                type="text" 
                onChange={handleEditChange}
                onBlur={handleEditBlur}
                onKeyDown={handleKeyDown}
                value={editText} 
                required />
                {/* <p className={task.isChecked ? "txst checked" : "txst"}>{task.task}</p> */}
                <p className="date__task">{task.date}</p>
            </label>
            <button className="remove__btn" onClick={() => onRemove(task.id)}>X</button>
        </div>
    )
}