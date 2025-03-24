import { useState } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import "./Main.scss"

export default function Main() {
    const [taskNumber, setTaskNumber] = useState(0);
    function setCountTask(number){
        setTaskNumber(number)
    }
    
    return (
        <main>
            <div className="container">
                <div className="main">
                    <Header getNumTask={taskNumber} />
                    <List onTaskChange={setCountTask} />
                </div>
            </div>
        </main>
    )
}