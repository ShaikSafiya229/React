import {useState} from "react";
function Dora()
{
    const[ Name , getName]=useState("");
    const functionality = (e)=>{
        e.preventDefault();
        alert(`Welcome ${Name}`);
    };
    return (
        <form onSubmit={functionality}>
            <label>Name: </label>
            <input type="text" onChange={
                (e)=>getName(
                    e.target.value)
            } />
            <button type="submit">Submit</button>
        </form>
    );
}
export default Dora;