import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';


const Header = ({setSearchTerm}) => {
    const [search,setSearch] = useState("");

    const updateSearch = (e) =>{
        setSearch(e.target.value);
    }
    
    const handleSubmit = (e) =>{
        setSearchTerm(search);
    }

    const handleCustomSubmit = (searchTerm) => {
        setSearch(searchTerm);
        setSearchTerm(searchTerm);
    }

    return (
        <>
            <h1>SnapShot</h1>
            <input type="text" onChange={updateSearch} placeholder="Search..."></input>
            <button type="submit" onClick={handleSubmit}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <br/>
                <button onClick={(e)=> handleCustomSubmit('mountain')} style={{backgroundColor:"grey", color:"white", margin: "10px"}} type="submit">Mountains</button>
                <button onClick={(e)=> handleCustomSubmit('beach')} style={{backgroundColor:"grey", color:"white", margin: "10px"}} type="submit">Beaches</button>
                <button onClick={(e)=> handleCustomSubmit('bird')} style={{backgroundColor:"grey", color:"white", margin: "10px"}} type="submit">Birds</button>
                <button onClick={(e)=> handleCustomSubmit('food')} style={{backgroundColor:"grey", color:"white", margin: "10px"}} type="submit">Food</button>
        
        </>
    ) 
}

export default Header;