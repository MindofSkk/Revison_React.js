import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement} from "../Redux/Action"

export const Counter = () => {

    const s=useSelector((state)=>state);
    // console.log(s)
    const dispatch=useDispatch()
  return (
    <div>

      
      <button onClick={()=>dispatch(increment())}>click + </button>
      <p>{s}</p>
      <button onClick={()=>dispatch(decrement())}>click - </button>
    </div>
  );
};
