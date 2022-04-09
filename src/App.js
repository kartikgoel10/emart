import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import { Switch, Route} from 'react-router-dom';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
<>
<Navbar/>
<Switch>
  <Route exact path='/home' component={<Home/>} />
  <Route exact path="/products" component={Products} />
  <Route exact path="/products/:id" component={Product} />
  <Route exact path="/Cart" component={Cart} />

<Home/>
</Switch>
</>
  );
}

export default App; 