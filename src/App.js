import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isShown = useSelector(state => state.ui.cartIsShown);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://food-react-e2f74-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { 
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {isShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
