import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const navigate = useNavigate();

const handleSubmit = () =>{
alert('Login Efetuado');
navigate(`/`);
}
  
  return (
    <motion.div 
    initial={{x:  900 }}
    animate={{ x:0 }} 
    exit={{x: -window.innerWidth}}>
      <div className='TelaLogin'>
         <h1>Começar</h1>
         <form onSubmit={handleSubmit}>
         <h2>Login</h2>
         <p>Entre com email e senha para logar no Sunshine</p>
          <input type="text" placeholder='Email' required/>
          <input type="password" placeholder='Senha'/>
          <button>Entrar</button>
          <Link to="/"><p className="senha">Lembrar senha</p></Link>
         </form>
       </div></motion.div>
     )
}

export default Login 
