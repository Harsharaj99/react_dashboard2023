

import './App.css';
import ButtonAppBar from './components/Header';

import Addons from './components/Addons';
import Faq from './components/Faq';
import Perks from './components/Perks';
import Support from './components/Support';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';



function App() {
  return (
   
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/perks' element={<Perks />}></Route>
          <Route path='/addons' element={<Addons/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/support' element={<Support/>}></Route>
        
        </Routes>
      </div>
   
  );
}

export default App;
