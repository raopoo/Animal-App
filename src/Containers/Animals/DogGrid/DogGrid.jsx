import './DogGrid.css'
const DogGrid = (props) =>{
    const {id,imgUrl} = props;
return(
    <img src={imgUrl} alt={id} className='dogImg'></img>
)
}

export default DogGrid;