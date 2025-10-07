import { useState } from "react";
import Box from "./components/boxes";

import Checkout from "./components/checkout";
import close from "./assets/cross.svg";
import item1 from "./assets/pastery1.jpg";
import item2 from "./assets/pastery2.jpg";
import item3 from "./assets/pastery3.jpg";
import item4 from "./assets/pastery4.jpg";
import item5 from "./assets/pastery5.jpg";
import item6 from "./assets/pastery6.jpg";
import item7 from "./assets/pastery7.jpg";
import item8 from "./assets/pastery8.jpg";
import item9 from "./assets/pastery9.jpg";
import item10 from "./assets/pastery10.jpg";
import item11 from "./assets/pastery11.jpg";
import item12 from "./assets/pastery12.jpg";

function App() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  function basket(Qty, itemName, price, id) {
    if (Qty === 0) {
      setList((prev) => prev.filter((item) => item.id !== id));
    } else {
      setList((prev) => {
        const exists = prev.find((item) => item.id === id);
        if (exists) {
          return prev.map((item) =>
            item.id === id
              ? { ...item, name: itemName, Qty: Qty, price: price * Qty }
              : item
          );
        }
        return [...prev, { id, name: itemName, Qty, price }];
      });
    }
  }

  function onoff() {
    setShow((show) => !show);
  }

  return (
    <div className=" min-h-screen p-5 ">
      <h1 className="text-3xl md:text-4xl font-bold  md:w-[70vw] font-serif mx-auto py-4 ">
        Dessert Premium
   
      </h1>

      {!show ? (
        list.length > 0 && <Checkout go={onoff} />
      ) : (
        <div
          className="bg-[#835959] rounded-3xl 

        border-2 p-5 w-[90%] md:w-[45vw] fixed left-[50%] 
         z-30 top-28 translate-x-[-50%] text-center" 
        >
          <img
            className=" w-8 p-2 hover:border fixed right-8
             border-amber-50 rounded-lg"
            src={close}
            alt="error"
            onClick={onoff}
          />

          <ul className="my-6 ">
            {list.map((data) => (
              <li key={data.id}>
                <div className="flex justify gap-6 text-center text-sm md:text-2xl
                 font-bold justify-evenly px-2 py-2">
                  <p className=" w-[30%]">{data.name} </p>
                  <p className=" w-[30%]">{data.Qty}</p>
                  <p className=" w-[30%] font-extrabold">{data.price}</p>
                </div>
              </li>
            ))}
            {list.length > 0 && (
              <li className="text-xl md:text-2xl font-bold text-center my-4">
                <div className="flex justify gap-6 text-center text-xl md:text-2xl
                 font-bold justify-evenly ">
                  <p className=" w-[30%]" >Total</p>
                  <p className=" w-[30%]">{list.reduce((acc, item) => acc + item.Qty,0)}</p>
                  <p className=" font-extrabold w-[30%]">₹ {list.reduce((acc, item) => acc + item.price,0)}</p>
                </div>
               
              </li>
              
            )}
            
          </ul>
           <button
                  onClick={() => alert("Order confirmed")}
                  className=" cursor-pointer text-2xl bg-purple-700 
                  font-bold border text-white
                   rounded-2xl px-4 py-1.5 "
                >
                Confirm order
                </button>
        </div>
      )}

      <div
        className="grid gap-4 md:gap-2 md:grid-cols-3 w-[80vw] md:w-[70vw] p-3 
      mx-auto  rounded-2xl"
      >
        <Box
          id="1"
          name="Baklava"
          price={150}
          topping="Pistachio Baklava"
          image={item1}
          sending={basket}
        />
        <Box
          id="2"
          name="Crème Brûlée"
          price={200}
          topping="Vanilla Crème Brûlée"
          image={item4}
          sending={basket}
        />
        <Box
          id="3"
          name="Tiramisu"
          price={120}
          topping="Classic Tiramisu"
          image={item2}
          sending={basket}
        />
        <Box
          id="4"
          name=" Pie"
          price={100}
          topping=" Lemon Meringue Pie"
          image={item3}
          sending={basket}
        />
        <Box
          id="5"
          name="Macaron"
          price={250}
          topping="Macaron Mix of Five"
          image={item7}
          sending={basket}
        />
        <Box
          id="6"
          name="Cake"
          price={300}
          topping="Red Velvet Cake"
          image={item5}
          sending={basket}
        />
        <Box
          id="7"
          name="Brownie"
          price={280}
          topping="Salted Caramel Brownie"
          image={item6}
          sending={basket}
        />
        <Box
          id="8"
          name="Panna Cotta"
          price={80}
          topping="Vanilla Panna Cotta"
          image={item8}
          sending={basket}
        />
        <Box
          id="9"
          name="Waffle"
          price={260}
          topping="Waffle with Berries"
          image={item9}
          sending={basket}
        />
        <Box
          id="10"
          name="Strawberry Ice Cream"
          price={200}
          topping="Strawberry with vanilla"
          image={item10}
          sending={basket}
        />
        <Box
          id="11"
          name="Chesse Cake"
          price={200}
          topping="Chessecake & Blueberry"
          image={item11}
          sending={basket}
        />
        <Box
          id="12"
          name="Chocolate Donut"
          price={200}
          topping="Donut with vanilla cream"
          image={item12}
          sending={basket}
        />
      </div>
    </div>
  );
}

export default App;
