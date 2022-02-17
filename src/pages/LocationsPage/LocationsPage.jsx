import axios from "axios"
import { useEffect, useState } from "react"
import Pagination from "../../components/Pagination/Pagination";
import LcGallery from "../../components/Gallery/LcGallery"
import Buscador from '../../components/Search/buscador';

export default function LocationsPage() {

    const Url = "https://rickandmortyapi.com/api/location"

    const [locations, setLocations] = useState([]);
    const [texto, setTexto] = useState("");

    const getLocations = async (newPage = 1) => {
        const res = await axios(Url+ "?page="+ newPage);
        setLocations(res.data.results);
    }

    useEffect(() => {
        getLocations();
    }, [])

    const locationsFilter = locations.filter((locations) => locations.name.toLowerCase().includes(texto.toLowerCase()));
    return <div>
        <Buscador texto={texto} setTexto={setTexto} />
        <LcGallery list={locations}/>
        <Pagination getData={locationsFilter}/>
    </div>
}