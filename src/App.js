import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      {path:'/about',element:''},
    {path:'/product',element:''},
    {path:'/order',element:''},

    ]},
    {path:'*',element:<div style={{marginTop:'50px',textAlign:'center'}}>Ops! page not found</div>}
  ])
  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
