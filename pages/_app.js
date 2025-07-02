import { useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  return (
    <Component {...pageProps} cart={cart} setCart={setCart} />
  );
}
