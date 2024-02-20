import { GlobalContext } from "./context/GlobalContext"
import { useContext } from "react";
import React from 'react';
import RecipeItem from './RecipeItem';  

const Home=()=>{
    const {recipelist}=useContext(GlobalContext);
    return(
        <div className="outer">
            <div className="Inner">
            {recipelist.length?
            (recipelist.map((list)=> <RecipeItem key={list.id} list={list}/>) ):(
                <p>No recipe found</p>
            )}
            </div>

        </div>

    )

}
export default Home