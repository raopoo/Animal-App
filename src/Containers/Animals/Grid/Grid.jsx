import './Grid.css';

const Grid = (props) =>{
 const {id,imgUrl} = props;
return(
    <img src={imgUrl} alt={id} className='animalImg'></img>
)}

export default Grid;