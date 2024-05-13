import ShowCounter from "./ShowCounter";
import Whatever from "./WhateverIWant";

import { createContext, useCallback, useState } from "react";

export const DisplayContext = createContext();


const Display = ( count) => {
    const[title,setTitle] = useState('my title')
    return (
        <>
             <h3>Display</h3>
             <DisplayContext.Provider value = {{title,setTitle}}>
             <ShowCounter />
             <div>
                <Whatever/>
             </div>
             </DisplayContext.Provider>
             
        </>
    )
}

export default Display;