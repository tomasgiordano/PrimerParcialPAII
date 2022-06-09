import React ,{useEffect} from 'react';
import Personaje from './Personaje';
import { useState } from 'react';
import '../stylesheets/Listado.css'

export const Listado = ({busqueda}) => {

    const [personajes,setPersonajes] = useState([]);

    useEffect(()=>{
        const urlNameStart = !busqueda ? "" : "&nameStartsWith=" + busqueda;
        const URL = 'https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=c9e912b5d198a5629436ff17f8826d41&hash=36d418c4e427fc15b039134ae399a4e1&ts=1' + urlNameStart;

        const fetching = async () => {
            try {
                const res = await fetch(URL);

                if(!res.ok) throw res;

                const {data:{results}} = await res.json();

                let arrResults = [];

                results.forEach(({id,name,thumbnail})=>{
                    var path = ""

                        if(thumbnail != null)
                            path = thumbnail.path+"/portrait_xlarge."+thumbnail.extension


                        arrResults.push({
                            id: id,
                            name: name,
                            avatar: path,
                        });
                })
                setPersonajes(arrResults);

            } catch (err) {
                console.log(err.status,err.statusText);
            }
        }

        fetching();
    },[busqueda])

    return(            
        <section className='cards'>
        {
            personajes.map((personaje)=><Personaje key={personaje.id} personaje={personaje} />)
        }
        </section>
    );
}
