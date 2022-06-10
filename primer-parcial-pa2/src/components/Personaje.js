import React,{useState} from 'react';
import '../stylesheets/Personaje.css'
import Modal from './Modal';
import Ventana from './Ventana';

const Personaje = ({personaje}) => {

    const {name, avatar} = personaje
    const [open, setOpen] = useState(false);

    return (
        <>
            <figure className='card' onClick={() => setOpen(true)}>
                <img src={avatar} alt={`Imagen de ${name}`}/>
                <figcaption className='card-title'>{name}</figcaption>
            </figure>
            <Modal open={open} setOpen={setOpen}>
                <Ventana setOpen={setOpen} personaje={personaje}/>
            </Modal>
        </>
     );
}

export default Personaje;