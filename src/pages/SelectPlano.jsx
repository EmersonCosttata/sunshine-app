import './SelectPlano.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SelectPlano = () => {
  return (
    <motion.div 
    initial={{x:  1000 }}
    animate={{ x:0 }} 
    exit={{x: -window.innerWidth}}>
    <div className="telaPlano">
      <h1>Selecione um dos plano abaixo:</h1>
      <div className='opcs'>
      <Link to={`/cadastro/Stardard`}>
        <div className='Plano'>
        <h2>Plano Stardard</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's </p><p>Standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div></Link>
        <Link to={`/cadastro/Medium`}>
        <div className='Plano'>
        <h2>Plano Medium</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's </p><p>Standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div></Link>

        <Link to={`/cadastro/UltraSun`}>
        <div className='Plano'>
        <h2>Plano UltraSun</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's </p><p>Standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div></Link>

      </div>
    </div>
 </motion.div>
  )
}

export default SelectPlano
