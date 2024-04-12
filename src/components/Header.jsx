
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
    {!isOpen && <button ><Link to="/movies"><span>Filmes</span></Link></button>}
    {!isOpen && <button ><Link to="/series"><span>Series</span></Link></button>}
    </div>
     <div className="logo"><Link to="/"><img src={logo}></img></Link></div>
  </header>
  );

};

export default Header;