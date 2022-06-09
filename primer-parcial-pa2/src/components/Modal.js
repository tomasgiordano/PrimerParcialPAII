import "../stylesheets/Modal.css"

const Modal = ({open, setOpen, children}) =>{

    return (
        <div className={`modal ${open? "modalShow" : "modalClose"}`} onClick={() => {setOpen(false)}}>
            {children}
        </div>
    );
}

export default Modal;