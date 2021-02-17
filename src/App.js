import './App.css';
import Header from './components/Header/Header';//As it is an external component,it has been attached with this js file. single dot means they are in same folder, double dot means you have to go another folder
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; //import from "https://reactrouter.com/web/guides/quick-start" after installation
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import ProductKey from './components/ProductKey/ProductKey';

function App() {
  return (
    <div>
     <Header></Header>

    <Router>
      <Switch>

        <Route exact path="/shop">
        <Shop></Shop>
        </Route>

        <Route path="/orderReview">
        <Review></Review>
        </Route>

        <Route path="/manage">
        <Manage></Manage>
        </Route>

        <Route exact path="/">
        <Shop></Shop>
        </Route>

        <Route path="/product/:productKey">
        {/* url be like: http://localhost:3000/product/B01LWPSB57
        normally http://localhost:3000 porjonto thake */}
        <ProductKey></ProductKey>
        </Route>



        <Route path="*">
          {/* Ei route ta sobsomoy last a rakhte hobe */}
        <NotFound></NotFound>
        </Route>


      </Switch>
    </Router>
    </div>
  )
}

export default App;