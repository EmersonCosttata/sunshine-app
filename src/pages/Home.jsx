
import Destaque from '../components/Destaque';
import Section from '../components/Section';
import { MoviesList } from '../Api/MoviesList';

const Home = () => {

  const [data1] = MoviesList({ url: 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1' });
  const [data2] = MoviesList({ url: 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1' });

  const [data3] = MoviesList({ url: 'https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1' });
  const [data4] = MoviesList({ url: 'https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1' });
  
  const [data5] = MoviesList({ url: 'https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1' });
  const textoDestaque="Oppenheimer na Area";
  const paragrafos="Premidado no Oscar, chega nas telas da sunshine hoje!";
  const paragrafos2="Conheça sobre a historia da bomba atomica";
  
  return (
    <>
    <Destaque textoDestaque={textoDestaque} paragrafos={paragrafos} paragrafos2={paragrafos2}/>
    {data1 && <Section nomeSessao="Filmes populares no Sunshine" images={data1}/> }

    {data2 &&  <Section nomeSessao="Melhores avaliações da plataforma" images={data2}/> }

     {data3 && <Section nomeSessao="Fizeram seu nome no cinema" images={data3}/>}
     
     {data4 &&  <Section nomeSessao="Series Populares de acordo com TMDB" images={data4}/> }
    
   {data5 &&  <Section nomeSessao="Para Jovens muito dinamicos" images={data5}/> }
    </>
  )
}

export default Home
