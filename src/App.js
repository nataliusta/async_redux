import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();
  const isShown = useSelector(state => state.ui.cartIsShown);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
          status: 'pending',
          title: 'Sending..',
          message: 'Sending cart data'
        })
      );
        const response = await fetch('https://food-react-e2f74-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { 
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
          dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!'
          })
        );
      }

        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      );
    };
  }, [cart, dispatch]);

  return (
    <Fragment>
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
