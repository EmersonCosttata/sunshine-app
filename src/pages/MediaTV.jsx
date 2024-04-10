
import './Media.css'
import Section from '../components/Section';
import { useState } from 'react';
import Modal from 'react-modal';

import { MoviesList } from '../Api/MoviesList';
import { useParams } from 'react-router-dom';
import { TvDetail } from '../Api/TvDetail';

Modal.setAppElement("#root");

const Media = () => {
 //pop out modal
 const [modalIsOpen, setMIsOpen] = useState(false);
 const openModal = () => {
   setMIsOpen(true);
 };
 const closeModal = () => {
   setMIsOpen(false);
 };
 //
 
 const { id } = useParams();
 const [data5] = MoviesList({ url: `https://api.themoviedb.org/3/tv/${id}/similar?language=pt-%20BR&page=1` });

 // passou a função pra chamar a serie
const data = TvDetail({id})
console.log(data)
//
    return (
      <div className="mediageral">
  
        
      <img  className="mediageralimg"src={`https://image.tmdb.org/t/p/original/${data.tv && data.tv.backdrop_path}`}></img>
        
        <div className='mediafilmenome'>
            <img  className='mediafilmenomeimg' src={`https://image.tmdb.org/t/p/original/${data.tv && data.tv.poster_path}`}></img>
             <p>{data.tv && data.tv.adult === false ? <>16</> : <>+18</>}, { data.tv && data.tv.genres[0].name}, CC, AD º 
             {data.tv && data.tv.first_air_date.substring(0, 4)}, 
             Duração: {data.tv && data.tv.episode_run_time[0]} Minutos, {data.tv && data.tv.seasons.length} Temporadas</p>

            <button onClick={openModal}>Assista</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="procura" 
            overlayClassName="overlay" classname="content" style={{content: { backgroundColor: 'rgba(0, 0, 0, 0.9)'}
            }} >
              <button className="fechar"onClick={closeModal}>X</button>
              <iframe src="https://www.youtube.com/embed/9DEOJkmZLd8?vq=hd1080&autoplay=1" title="Pobres Criaturas | Trailer Oficial" frameborder="0" allowfullscreen="true" width="98%" height="98%"></iframe>
            </Modal>
            
             <button >Trailer</button> <button >+</button> 


            <p>{data.tv && data.tv.overview}</p>      
        </div> 
      
        {data5 &&  <Section nomeSessao="Você pode gostar tambem" images={data5}/> }
      </div> 
  )
}

export default Media
