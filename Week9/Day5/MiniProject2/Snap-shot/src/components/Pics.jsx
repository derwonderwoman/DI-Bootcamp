import React, { useEffect, useState } from "react";
import handleSearch from "./Pexels"

const Pics = ({searchTerm}) => {
    const[photos,setPhotos] = useState([]);

    useEffect(() => {
        handleSearch(searchTerm).then (result => setPhotos(result.photos))
    }, [searchTerm])

    let images = photos.map(photo => {
        return <img src={photo.src.small} key={photo.id} alt={photo.alt} />;
      });

    return (
        <div>
          {images}
        </div>
    )
}

export default Pics;