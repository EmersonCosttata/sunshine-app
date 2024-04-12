import './App.css';

import { Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectPlano from './pages/SelectPlano';
import Cadastro from './pages/Cadastro';
import Media from './pages/Media';
import MediaTV from './pages/MediaTV';
import Movies from './pages/Movies';
import Series from './pages/Series';


function App() {
  const loc = useLocation();
      return(
        <div className="App">
   
      <Header/>

    <motion.div 
    initial={{opacity:  0}}
    animate={{ opacity: 1 }} >
     <AnimatePresence>
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/selecionaplano" element={<SelectPlano/>}/>
          <Route path="/cadastro/:plan" element={<Cadastro></Cadastro>}/>
          <Route path="/media/:id" element={<Media></Media>}/>
          <Route path="/mediatv/:id" element={<MediaTV></MediaTV>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
     </AnimatePresence>

        <Footer></Footer> 
    </motion.div>
        </div>
  )
}

export default App;
