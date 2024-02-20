import {Link} from 'react-router-dom';
import { GlobalContext } from './context/GlobalContext';
import { useContext } from 'react';

const Nav=()=>{
    const {searchrecep,setSearchrecep,handlesubmit}=useContext(GlobalContext);
    console.log(searchrecep);
    return(
        <div className="row">
            <div className='inrow'>
            
            <h2 className="text">
                FoodRecipie
            </h2>
<form className="ml-auto" onSubmit={(e)=>e.preventDefault()}>
  <input
    className="field"
    type="text"
    required
    placeholder="Search any Recipe"
    value={searchrecep}
    onChange={(e)=>setSearchrecep(e.target.value)}
  />
  <button onClick={handlesubmit} style={{backgroundColor:'black',borderRadius:'10px',color:'white'}}>Enter</button>
</form>
        <ul className='list'>

           <li> <Link to="/" className="homie">Home</Link></li>
           <li><Link to="/Favourites" className="favi">Favourites</Link></li>
            </ul>
            </div>

    </div>)

}
export default Nav