import { useState } from "react";
import App from "./App.jsx"
function Classic1()
{
    const[show , setshow]=useState(false);
    return (
        <>
        <button
         onClick={()=>setshow(!show)}
        >Reveal</button>
        {show && <App></App>}
        </>
    );
}
export default Classic1;