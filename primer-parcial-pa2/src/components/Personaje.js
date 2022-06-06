import React from 'react';
import '../stylesheets/Personaje.css'

const Personaje = ({personaje}) => {

    const {name, avatar} = personaje
    return ( 
        <figure className='card'>
            <img src={avatar} alt={`Imagen de ${name}`}/>
            <figcaption className='card-title'>{name}</figcaption>
        </figure>
     );
}
 
export default Personaje;