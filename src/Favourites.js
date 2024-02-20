import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import RecipeItem from "./RecipeItem";


const Favourites=()=>{
    const {favouritelist}=useContext(GlobalContext);
    return(
        <div className="outer">
            <div className="Inner">
            {favouritelist&&favouritelist.length>0?
            (favouritelist.map((list)=> <RecipeItem list={list}/>) ):(
                <p>No Favourites</p>
            )}
            </div>

        </div>

    )

}
export default Favourites;