import "./styles.css";
import {useEffect} from "react"

export default function App() {
  useEffect(()=> {
    fetch("https://jsonplaceholdere.typicode.com/users")
    .then ((response)=> response.json())
  })
  
  return <div>
    
    
  </div>;
}
