import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import Buscador from '../../components/Search/buscador';



export default function CharactersPage() {
    const [characters, setCharacters] = useState([]);
    const [texto, setTexto] = useState("");

    const getCharacters = async (newPage = 1) => {
        const res = await axios("https://rickandmortyapi.com/api/character?page=" + newPage);
        setCharacters(res.data.results);
    }

    useEffect(() => {
        getCharacters();
    }, [])

    const charactersFilter = characters.filter((characters) => characters.name.toLowerCase().includes(texto.toLowerCase()));

    

    return <div>
        <Buscador texto={texto} setTexto={setTexto} />
        <Gallery list={charactersFilter}/>
        <Pagination getData={getCharacters}/>
    </div>
}
