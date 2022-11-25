import React from 'react';
import {Counter} from './Counter'
import {Route,Routes} from 'react-router-dom'
import { About } from './About';
import { Contact } from './Contact';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

     </Routes>

    {/* <Counter/> */} 
    </div>
  );
}

export default App;
