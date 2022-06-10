import "../stylesheets/Ventana.css"
import remove from '../assets/remove.png'

const Ventana = ({setOpen,personaje}) =>{

    const {id,name,avatar,description,urls} = personaje

    return (
        <div className="ventana" >
            <div className="ventana_1">
                <h1>{name}</h1>
                <img src={remove} alt={`Imagen de remove`} onClick={() => {setOpen(false)}}/>
            </div>
            <div className="ventana_2">
                <figure className='card' onClick={() => setOpen(true)}>
                    <img src={avatar} alt={`Imagen de ${name}`}/>
                </figure>
                <div className="ventana_3">
                    <p>{description?description:"Sorry, this character has no description 😢"}</p>
                </div>
            </div>
        </div>
    );
}

export default Ventana;