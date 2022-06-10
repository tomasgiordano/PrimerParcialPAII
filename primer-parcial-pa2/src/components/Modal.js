import "../stylesheets/Modal.css"

const Modal = ({open, children}) =>{

    return (
        <div className={`modal ${open? "modalShow" : "modalClose"}`}>
            {children}
        </div>
    );
}

export default Modal;