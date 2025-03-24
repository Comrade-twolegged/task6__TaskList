import "./ModalWindow.scss";

export default function ModalWindow({ closeModal, deleteСontent }) {
    return (
        <div className="modalWindow">
            <div className="contentModalWindow">
                <button className="back" onClick={closeModal}>x</button>
                <h1 className="titleModalWindow">Хочете видалити завдання?</h1>

                <div className="bttons">
                    <button className="agree btn" onClick={deleteСontent}>Так, хочу.</button>
                    <button className="refuse btn" onClick={closeModal}>Ні, нехочу.</button>
                </div>
            </div>
        </div>
    )
}