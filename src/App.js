import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isShown = useSelector(state => state.ui.cartIsShown);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
        const response = await fetch('https://food-react-e2f74-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { 
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed..');
      }

      const responseData = await response.json();
    };
  }, [cart]);

  return (
    <Layout>
      {isShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
