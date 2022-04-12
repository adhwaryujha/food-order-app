import { Fragment } from "react";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [isCartShown, setCartIsShown] = useState(false);

  const headerCartHandler = () => {
    setCartIsShown(true);
  };

  const cartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={cartHandler} />}
      <Header onShow={headerCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
