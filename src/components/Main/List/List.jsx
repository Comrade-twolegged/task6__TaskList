import { useState } from "react"
import Task from "./Task/Task";
import { useEffect } from "react";
import "./List.scss"
import ModalWindow from "../ModalWindow/ModalWindow";

export default function List({ onTaskChange }) {
    const [arrTask, setArrTask] = useState(() => {
        const savedTasks = JSON.parse(localStorage.getItem("task"));
        if (savedTasks) {
            return savedTasks;
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(arrTask));
    }, [arrTask]);

    useEffect(() => {
        const uncompletedTasks = arrTask.filter(task => !task.isChecked);
        onTaskChange(uncompletedTasks.length);
    }, [arrTask, onTaskChange]);

    function submit(e) {
        e.preventDefault();
        const currentDate = new Date;
        const date = currentDate.toLocaleTimeString();
        const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
        const taskData = new FormData(e.target);

        if (taskData.get("task").trim() !== "") {
            const newTask = {
                task: taskData.get("task"),
                id: uniqueId,
                date: date,
                isChecked: false
            };
            e.target.reset();
            setArrTask([...arrTask, newTask]);
        }
    }

    function onRemove(id) {
        setArrTask(arrTask.filter((task) => task.id !== id))
    }

    function toggleTaskCheck(id) {
        setArrTask(arrTask.map(task =>
            task.id === id ? { ...task, isChecked: !task.isChecked } : task
        ));
    }

    function editTask(id, newText) {
        setArrTask(arrTask.map((task) => task.id == id ? { ...task, task: newText } : task));
    }

    return (
        <div className="list">
            <form onSubmit={submit}>
                <input className="inputTask" name="task" type="text" placeholder="task name" required />
                <button className="bttn__list" type="submit">Enter</button>
            </form>

            <div className="task">
                {arrTask.map((arr) => <Task key={arr.id} task={arr} onRemove={onRemove} onToggleCheck={toggleTaskCheck} onEdit={editTask} />)}
            </div>
        </div>
    )
}