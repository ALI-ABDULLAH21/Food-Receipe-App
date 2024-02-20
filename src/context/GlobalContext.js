import { createContext } from "react";
import { useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [searchrecep, setSearchrecep] = useState("");
  const[recipelist,setRecipelist]=useState([]);
  const[recipedetail,setRecipedetail]=useState([]);
  const[favouritelist,setFavouritelist]=useState([]);
  const handlesubmit = async () => {
    
    console.log("suucess");
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchrecep}`);
      const res = await response.json();
      console.log("a");
      console.log(res);
      if (res && res.data.recipes) {
        setRecipelist(res.data.recipes);
        setSearchrecep(""); // Corrected property name to 'recipes'
      }
    } catch (err) {
      console.log(err.message);
    }

  };
  const handleadd = (getcurrent) => {
    console.log(getcurrent);
    let checkres = [...favouritelist];
    const index = checkres.findIndex((item) => item.id === getcurrent.id);
  
    if (index === -1) {
      checkres.push(getcurrent);
    } else {
      checkres.splice(index, 1); // Specify the number of elements to remove (1 in this case)
    }
  
    setFavouritelist(checkres);
  };
  
  

  return (
    <GlobalContext.Provider value={{ searchrecep, setSearchrecep,handlesubmit,recipelist,recipedetail,setRecipedetail,handleadd,favouritelist}}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
