
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import ProductList from './ProductList';
import './App.css';
import CartItem from './CartItem';
import LandingPage from './LandingPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
