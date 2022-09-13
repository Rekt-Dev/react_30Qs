import "./styles.css";
import {useEffect, useState} from "react"

export default function App() {
  const[users, sertUsers] = useState([])
  useEffect(()=> {
    fetch("https://jsonplaceholdere.typicode.com/users")
    .then ((response)=> response.json())
    .then((json)=> console.log(json))
  },[])
  
  return <div className="App">
    <h1>
      Users
    </h1>
    <div className="card">
      {users.map((user)=>(
       <div>
         
       </div> 
      ))}
      <div className="card-inner">
        <p>Ofear</p>
        <p>Ofear888</p>
  </div>
  </div>
  </div>
}
