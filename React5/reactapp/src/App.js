import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Index from './pages/Index';
import About from './pages/About';
import Books from './pages/Books';
function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Routes>
      <Route path ='/' element={<Index/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path ='/books' element={<Books/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
