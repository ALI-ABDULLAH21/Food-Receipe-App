import { Link } from 'react-router-dom';

const RecipeItem = ({ list }) => {
  return (
    <div>
      <div key={list.id} className="picturee">
        <img src={list.image_url} alt="picture" className="imagee" />
        <p>{list.publisher}</p>
        <button style={{backgroundColor:'black',outline:'none',borderRadius:'10px'}}>
          <Link to={`/recipie-det/${list.id}`} style={{textDecoration:'none',color:'white',fontSize:'15px'}}>Details</Link>
          </button>
      </div>
    </div>
  );
};

export default RecipeItem;
