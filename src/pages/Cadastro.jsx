import './Cadastro.css'
import { useNavigate, useParams } from "react-router-dom";
import { motion } from 'framer-motion'

const Cadastro = () => {

  const navigate = useNavigate();
  
  const {plan}  = useParams();

    const handleSubmit = () =>{
  
      alert('Cadastrado com sucesso.');
      navigate("/");

    }
    return (
      <motion.div 
    initial={{x:  window.screenX }}
    animate={{ x:0 }} 
    exit={{x: -window.innerWidth}}>
      <div className='Telacad'>
         <h1>Plano selecionado: {plan}</h1>
         <form onSubmit={handleSubmit}>
  
          <input type="text" placeholder='Nome' required/>
          <input type="text" placeholder='Sobrenome' />
          <input type="text" placeholder='Telefone' />
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='Senha' />
          <input type="password" placeholder='Repita Senha'/>
          <button>Cadastrar</button>
  
         </form>
         <p>Ao selecionar “Criar conta”, você confirma que tem 18 anos de idade ou mais e concorda com nossos Termos de Usoe nossa Política de Privacidade, permitindo que o SUN e suas respectivas Afiliadas utilizem suas informações para enviar atualizações, anúncios e ofertas. Se você permitir que uma criança use esta conta, precisaremos tratar as informações pessoais dela para fornecer os serviços. Para obter mais informações, consulte a Política de Privacidade Infantil.</p>
       </div></motion.div>
       )
  }
  

export default Cadastro
