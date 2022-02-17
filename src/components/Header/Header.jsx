import { NavLink } from "react-router-dom";
import "./Header.scss";


export default function Header(){
    return <header className="class-header">
       
        <nav className="class-header__nav">
            <NavLink to="/" className="class-header__link">Home</NavLink>
            <NavLink to="/characters" className="class-header__link">Characters</NavLink>
            <NavLink to="/locations" className="class-header__link">Locations</NavLink>
        </nav>
        
    </header>
}
