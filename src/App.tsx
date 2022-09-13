import "./styles.css";
import {useEffect, useState} from "react"

export default function App() {
  const[users, setUsers] =  useState<any[]>([])
  useEffect(()=> {
    fetch("https://jsonplaceholdere.typicode.com/users")
    .then ((response)=> response.json())
    .then((json)=> setUsers(json))
  },[])
  
  return <div className="App">
    <h1>
      Users
    </h1>
    <div className="card">
      {users.map((user)=>(
       <div>
         {user.name}
       </div> 
      ))}
      <div className="card-inner">
        <p>{user.name}</p>
        <p>{user.username}</p>
  </div>
  </div>
  </div>
}
