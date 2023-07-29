import React, { useState } from 'react'
import './index.css';


function App() {
const[myname,setMyname]=useState();
const[mobile,setMobile]=useState();
const[newData,setNewData]=useState([]);
// const myData=(e)=>{
//   setMyname(e.target.value);
// }
const submitdata=(e)=>{
  e.preventDefault();
   const newEntry={myname,mobile};
   setNewData([...newData,newEntry]); 
   setMyname("");
   setMobile("");
}
  return (
    <>
     <div className="container my-5 text-center">
      <form onSubmit={submitdata}>
        <div>
          <input type="text" placeholder="Enter Your Name" className="my-3 w-50 py-1" value={myname} onChange={(e)=>setMyname(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Enter Your Mobile Number" className="my-3 w-50 py-1" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        </div>
        <button className="btn btn-dark" type="submit">Submit</button>
      </form>
      <div className="my-3">
        
          {newData.map((values)=>{
            return(
              <>
              <h2>{values.myname}</h2>
              <h2>{values.mobile}</h2>
              </>
            )
          })}
        
      </div>
     </div>
    
    </>
  )
}

export default App