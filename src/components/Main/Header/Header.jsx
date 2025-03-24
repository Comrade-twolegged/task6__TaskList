import "./Header.scss"

export default function Header({getNumTask}) {
    const today = new Date().toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    
    return (
        <header>
            <div className="top__header">
                <h1 className="title">Note your tasks</h1>
                <p>Незавершені задачі: {getNumTask}</p>
            </div>

            <div className="bottom__header">
                <p className="date">{today}</p>
            </div>
        </header>
    )

}