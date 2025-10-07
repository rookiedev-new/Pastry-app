import React from "react";

function Checkout({go}) {

  return (
    <div 
    onClick={go}
  className="text-white bg-green-500  font-bold 
    text-center text-2xl border-2 border-amber-700 py-1 md:py-2 px-4 z-30 
     rounded-2xl hover:bg-green-600 transition-all duration-500
     cursor-pointer fixed bottom-5 left-[50%] translate-x-[-50%]">
      Check Cart
    </div>
  );
}

export default Checkout;
