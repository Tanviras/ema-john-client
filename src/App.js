import './App.css';
import Header from './components/Header/Header';//As it is an external component,it has been attached with this js file. single dot means they are in same folder, double dot means you have to go another folder
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
     <Header></Header>
     <Shop></Shop>
    
    </div>
  )
}

export default App;