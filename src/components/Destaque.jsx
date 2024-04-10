import '../App.css';
import destaque from '../assents/destaque.png'

const Destaque = ({textoDestaque, paragrafos, paragrafos2}) => {
  return (
    <div className="destaque"><img src={destaque}></img>
    <div className="destaqueTexto">
     <h1>{textoDestaque}</h1>
     <h3>{paragrafos}</h3>
     <h3>{paragrafos2}</h3>
     <button className="buttons">Assista agora mesmo</button>
     </div>
    </div>
   /* Tudo que esta em texto pode vir do back end, ate as tag de h3-h1, vindo de um bd ou outra estancia, ou fazer direto do app.jsx*/
  )
}

export default Destaque