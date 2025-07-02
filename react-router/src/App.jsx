import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() 
{
  return(
  <div>
    <h1 className='bg-green-600 p-4'>React Router</h1>
    <Header/>
    <Home/>
    <Footer/>
  </div>
  );
}

export default App
