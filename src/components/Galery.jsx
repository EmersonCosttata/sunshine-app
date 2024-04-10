
import '../App'; 
import { Link } from 'react-router-dom';

const Galery = ({ images }) => {

const vetorImage = images.slice(3,9)

  return (
    <div className="galery">
      {vetorImage && vetorImage.map((image) => (
        <>
         
       {image.original_name &&  <Link to={`/mediatv/${image.id}`}><img key={image.id} src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`} alt={`${image.title}`} /></Link>}
       {!image.original_name &&  <Link to={`/media/${image.id}`}><img key={image.id} src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`} alt={`${image.title}`} /></Link>}
        </>
      ))}
    </div>
  );
};

export default Galery;