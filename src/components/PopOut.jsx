import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import PopOutPesquisa from './PopOutPesquisa';

import { useContext } from 'react';
import { FalseContext } from '../Context/FalseContext';

import './PopOut.css'


Modal.setAppElement("#root");


function PopOut() {
  //contexo pra fechar em qualquer lugar o modal
  const { popfalse, setPopFalse } = useContext(FalseContext);

  //pop out modal
  const [modalIsOpen, setMIsOpen] = useState(false);

  const openModal = () => {
    setMIsOpen(true);
  };

  const closeModal = () => {
    setMIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false); 
// cuida se o context mudar pra false, assim ele seta pra false
  useEffect(()=>{
    if(popfalse===false){
      console.log('CHEGUEI NO FALSE')
      setMIsOpen(false);
    }
  },[popfalse])


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <div className={`pop-out-container ${isOpen ? 'open' : ''}`}>
          <div className="pop-out-content">
            <Link to="/login" className='pagina'><button>Login</button></Link>
            <Link to="/selecionaplano"> <button>Cadastrar</button></Link>

            <button onClick={openModal}>Procurar</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="procura" 
            overlayClassName="overlay" classname="content" style={{content: { backgroundColor: 'rgba(10, 10, 10, 0.9)'}
            }} >
              <button className="fechar"onClick={closeModal}>X</button>
              <PopOutPesquisa/>
            </Modal>
          
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default PopOut;
