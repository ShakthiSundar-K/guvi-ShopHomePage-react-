import React from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";
import "./index.css";
function App() {
  let [cart, setCart] = useState(0);
  return (
    <>
      <Topbar cart={cart} />
      <Header />
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
            <Card cart={cart} setCart={setCart} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
