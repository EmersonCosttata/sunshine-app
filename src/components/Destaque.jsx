import '../App.css';
import destaque from '../assents/destaque.png'
import { Link } from 'react-router-dom';

const Destaque = ({textoDestaque, paragrafos, paragrafos2}) => {
  return (
    <div className="destaque"><img src={destaque}></img>
    <div className="destaqueTexto">
     <h1>{textoDestaque}</h1>
     <h3>{paragrafos}</h3>
     <h3>{paragrafos2}</h3>
     <Link to="/media/872585"><button className="buttons">Assista agora mesmo</button></Link>
     </div>
    </div>
   /* Tudo que esta em texto pode vir do back end, ate as tag de h3-h1, vindo de um bd ou outra estancia, ou fazer direto do app.jsx*/
  )
}

export default Destaque