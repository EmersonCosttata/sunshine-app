
import logo from '../logo.png';
import PopOut from './PopOut';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// pop contem login ou minha contam de tiver logado, cadastro ou n, e procurar

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header" >
    <div className="buttons">
    <button onClick={() => setIsOpen(!isOpen)}><span>...</span></button> 
    {isOpen && <PopOut />}
    {!isOpen && <button ><span>Filmes</span></button>}
    {!isOpen && <button ><span>Series</span></button>}
    </div>
     <div className="logo"><Link to="/"><img src={logo}></img></Link></div>
  </header>
  );

};

export default Header;