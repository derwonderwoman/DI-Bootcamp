import React from "react";

const UserFavoriteAnimals = ({favAnimals}) => {
    return (
    <ul>
        {favAnimals.map((animal) => {
            return <li>{animal}</li>
        })
    }
    </ul>
    );
}

export default UserFavoriteAnimals;