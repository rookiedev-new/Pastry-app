import React, { useState } from "react";

import cart from "../assets/cart.svg";
import inc from "../assets/p.svg";
import dec from "../assets/m.svg";

function Box({id, image, name, price, topping, sending }) {
  const [count, setCount] = useState(1);
  const [check, setCheck] = useState(false);
  function active() {
    setCheck(!check);
    sending(count,name,price,id);
  }
  function plus() {
    setCount(count + 1);
    sending(count + 1,name,price,id);
  }
  function minus() {
    if (count > 1) {
      setCount(count - 1);
  
      sending(count -1,name,price,id);
    } else {
      setCheck(!check);
      sending(0,name,price,id);
    }
  }
  return (
    <div className=" w-[80vw] md:w-72 border-2
     border-white rounded-2xl p-3 my-2 transition-transform hover:scale-105 duration-500 ">
      <img
        className={`w-[100%] h-[65%] ${
          !check ? "border-0" : "border-red-600/60 border-2"
        } rounded-xl tarnsition-all
         duration-75 ease-in-out`}
        src={image}
        alt="img"
      />
      <div
        className={`rounded-2xl m-auto relative z-10 top-[-18px]
          ${!check ? "bg-amber-50" : " bg-red-600"}
          border-red-600/60 border-2  
      w-2/3 transition-all duration-500`}
      >
        {!check ? (
          <p
            onClick={active}
            className="flex justify-center items-center font-thin text-red-600 py-1"
          >
            <img src={cart} alt="img" />
            Add to Cart
          </p>
        ) : (
          <div className="flex justify-evenly items-center font-extrabold  text-white  rounded-xl py-1 ">
            <button onClick={minus} className="px-4 h-6">
              <img className="w-4" src={dec} alt="img" />
            </button>
            <h1>{count}</h1>
            <button onClick={plus} className="px-4 h-6">
              <img src={inc} className="w-4 " alt="img" />
            </button>
          </div>
        )}
      </div>

      <div className="text-xl mt-[-10px] font-bold px-2 py-1 ">
        <p className="text-gray-700 text-lg">{name}</p>
        <h1>{topping}</h1>
        <h1 className="text-red-500">{price} Rs</h1>
      </div>
    </div>
  );
}
export default Box;
