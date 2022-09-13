import "./styles.css";
import {useEffect} from "react"

export default function App() {
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
      <div className="card-inner">
        
  </div>;
}
