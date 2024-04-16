import { useEffect, useState } from 'react';
import './Media.css'

import Section from '../components/Section';
import Modal from 'react-modal';

import { MoviesList } from '../Api/MoviesList';
import { useParams } from 'react-router-dom';
import {MovieDetail} from '../Api/MovieDetail'
import {GetMediaTrailer} from '../Api/GetMediaTrailer'
import { AuthAddRemoveFav } from '../Api/Firebase/AuthAddRemoveFav';
import { useAuthValue } from '../Context/AuthContext';
import { AuthListFav } from '../Api/Firebase/AuthListFav';

import { useContext } from 'react';
import { FalseContext } from '../Context/FalseContext';



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
    const { popfalse, setPopFalse } = useContext(FalseContext);
    setPopFalse(true)

 
 const { id } = useParams();
 const [data5] = MoviesList({ url: `https://api.themoviedb.org/3/movie/${id}/similar?language=pt-%20BR&page=1` });

 // passou a função pra chamar o filme
const data = MovieDetail({id})

    //função pra pegar o trialer do filme
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`
      const trailer = GetMediaTrailer({url})

    //função de chamar o trailer pelo yt
   let yturl;
    if (trailer.trailer && trailer.trailer.length !== 0) {
      yturl = `https://www.youtube.com/embed/${trailer.trailer[0].key}?vq=hd1080&autoplay=1`;
    } 
 //else {
  //    if (data.movie) {
   //     yturl = 'QueryYoutubeTrailer(data.movie.title)';
    //    if(yturl = []) yturl= `https://www.youtube.com/embed/E0ozmU9cJDg?vq=hd1080&autoplay=1`
    //  }
   // }

//função pra add aos fav
const { user } = useAuthValue(); // pegando o user pra usar o uid
const [errormedia, setErrorMedia] = useState();
//chamando a função para add fav
const { addFav, error: authError, loading } = AuthAddRemoveFav();

//chamando a lista atual para checagem
const { dataList: lista, error: ListauthError, loading: ListLoading } = AuthListFav('moviesfav');

console.log(lista)
const AddtoFav = async () => {

  const idUser = user.uid;
  const original_name = null
  const poster_path = data.movie.poster_path
  const title = data.movie.title

    const datafav = { 
        idUser,
        id,
        original_name,
        poster_path,
        title
    };
    //definindo a base de dados aonde sera salvo as informações
    const cole ='moviesfav'

    // checando se essa midia ja n foi adcionada
    const jaAdd = lista.some(movie => movie.id === datafav.id && movie.idUser === datafav.idUser);
      if(jaAdd){ setErrorMedia('Ja foi Adcionado') 
      return }

    //checando se veio o iduser
      if (!datafav.idUser) {
        setErrorMedia('Tente mais tarde')
          return;
      }

      try {
          const res = await addFav(datafav,cole);
          window.location.reload(); 
      } catch (authError) {
        setErrorMedia('Erro db Tente mais tarde');
      }
};


    return (
      <div className="mediageral">
  
        
      <img  className="mediageralimg"src={`https://image.tmdb.org/t/p/original/${data.movie && data.movie.backdrop_path}`}></img>
        
        <div className='mediafilmenome'>
            <img  className='mediafilmenomeimg' src={`https://image.tmdb.org/t/p/original/${data.movie && data.movie.poster_path}`}></img>
             <p>{data.movie && data.movie.adult === false ? <>16</> : <>+18</>} { data.movie && data.movie.genres[0].name}, CC, AD º 
             {data.movie && data.movie.release_date.substring(0, 4)}, Duração: {data.movie && data.movie.runtime} Minutos</p>

            <button onClick={openModal}>Assista</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="procura" 
            overlayClassName="overlay" classname="content" style={{content: { backgroundColor: 'rgba(0, 0, 0, 0.9)'}
            }} >
              <button className="fechar"onClick={closeModal}>X</button>
              <iframe src={yturl} title='_' frameborder="0" allowfullscreen="true" width="98%" height="98%"></iframe>
            </Modal>
            
             <button >Trailer</button> <button onClick={AddtoFav} >+</button> <span>{loading && 'Adcionando'}</span> <span>{errormedia && errormedia}</span>
            

            <p>{data.movie && data.movie.overview}</p>      
        </div> 
      
        {data5 &&  <Section nomeSessao="Você pode gostar tambem" images={data5}/> }
      </div> 
  )
}

export default Media
