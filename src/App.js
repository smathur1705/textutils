
import './App.css';

import Navbar from './components/Navbar';

import About from './components/About';
import TextForm from './components/TextForm';
import { BrowserRouter as router , Route , link , Routes ,Switch } from 'react-router-dom';



function App() {
  return ( 
    <>
      
      <Navbar title="TextUtils" about="About " textForm="TextForm"/>
      <h1 className='flex justify-center items-center flex-row'>WELCOME TO MY TEXT APP!!</h1>


<Routes>
      

      <Route path='/about' element={<div><About/></div>}></Route>

      <Route path='/textForm' element={<div className="container my-3">
      <TextForm heading={"Enter the text below to analiyze"}/>
      </div>}></Route>

      

</Routes>





    </>
      
    
  );
}

export default App;
