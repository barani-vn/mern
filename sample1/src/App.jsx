 import { useState } from 'react'
 import { useEffect } from 'react'
import Student from './component1/Student'
import CourseCard from './component1/CourseCard'

import './App.css'

/*function App() {
  

  return (
    
      <Student/>

      <Student/>

      <div>
        <Student name="John Doe" age={20} gender="Male"/>
        <Student name="Jane Smith" age={22} gender="Female"/>
        <Student name="Michael Johnson" age={19} gender="Male"/>
      </div>
    <div>
      <CourseCard name="React" description="Learn React fundamentals"/>
      <br/>
      <CourseCard name="Node.js" description="Build server-side applications with Node.js"/> 
      <br/>
      <CourseCard name="MongoDB" description="Learn NoSQL database with MongoDB"/>
    </div>
  )
} */

/* function App() {
  
  let count=0;
  function handleClick(){
    count++;
    console.log(count);
  }
  function handleClick1(){
    count--;
    console.log(count);
  }
  return(
  <div>
    <h1>Count: {count}</h1>
    <button onClick={handleClick}>Increment</button>
    <br/>
    <button onClick={handleClick1}>Decrement</button>
  </div>
)}
export default App
 */

// function App() {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
  
//   function noof6(){
//     setCount(count + 6);
//     setCount1(count1 + 1);

//   }
//   function noof4(){
//     setCount(count + 4);
//     setCount2(count2 + 1);
//   }

 
//   return(
//   <div style={{
//       border: "1px solid black",
//       padding: "23px",
//       width: "200px",
//       borderRadius: "10px",
//       textAlign: "center",
//       backgroundColor: "lightgreen",
//     }}>
//     <h1>Score: {count}</h1>
//     <h1>no-of-6s: {count1}</h1>
//     <h1>no-of-4s: {count2}</h1>
//     <button onClick={noof6}> 6</button>
//     <br/>
//     <button onClick={noof4}> 4</button>
//     <br/>
//     <button onClick={()=>{setCount(0); setCount1(0); setCount2(0);}}>Reset</button>
    
//   </div>
// )}

// function App() {

//   /*1.without dependency array
//     it will run at initial render and every re-render
//   */

//   useEffect(() => {
//     console.log("Component mounted");
//   })
//   return(
//     <div>
//       <h1>Welcome to React</h1>
//     </div>
//   )
// }

// function App() {

//   /*1.with dependency array
//     it will run at initial render and will never render
//   */

//   useEffect(() => {
//     console.log("Component mounted");
//   },[])
//   return(
//     <div>
//       <h1>Welcome to React</h1>
//     </div>
//   )
// }

// function App() {

//   /*1.dependency array with value
//     it will run at initial render and if update the value of count it will re-render
//   */
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Component mounted");
//   },[count])

//   function increment(){
//     setCount(count + 1);
//   }

//   return(
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//   )
// }

function App() {

  /*1.dependency array with value
    it will run at initial render and if update the value of count it will re-render
  */
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title="title changed"+count;
  },[count])

 function increment(){
     setCount(count + 1);
  }

   return(
     <div>
       <h1>count: {count}</h1>
       <button onClick={()=>setCount(count+1)}>Increment</button>
     </div>
   )

}

export default App
