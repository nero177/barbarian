import React, { useState } from 'react';
import Columns from './components/Columns';

import Main from './components/pages/Main';
import Brewery from './components/pages/Brewery.jsx';
import Beer from './components/pages/Beer.jsx';
import Hops from './components/pages/Hops.jsx';
import Laboratory from './components/pages/Laboratory.jsx';

import {Routes, Route} from 'react-router-dom';
import MusicPopup from "./components/MusicPopup";
import Modal from "./components/Modal";
import AgePass from "./components/AgePass";

function App() {
  const [turnMusic, setTurnMusic] = useState(false);
  const [modalOpened, setModalOpened] = useState(true);

  return (
    <React.Fragment>
      <Columns/>
      <MusicPopup turnMusic={turnMusic} setTurnMusic={setTurnMusic}/>

      <Modal modalOpened={modalOpened}>
        <AgePass setModalOpened={setModalOpened} setTurnMusic={setTurnMusic}/>
      </Modal>

      <Routes>
        <Route path="/" element={<Main/>}/>  
        <Route path="/brewery" element={<Brewery/>}/> 
        <Route path="/beer" element={<Beer/>}/> 
        <Route path="/hops" element={<Hops/>}/> 
        <Route path="/laboratory" element={<Laboratory/>}/> 
      </Routes> 
    </React.Fragment>
  );
}

export default App;
