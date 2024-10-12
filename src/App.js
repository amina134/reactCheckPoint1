import BasicCard from './components/BasicCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import back from './watermelon.jpg';
import melon from './melon.png';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

function App() {
  const firstName = 'Foulen';
  const styleObject={ color: "red", border: "30px solid red" }
  const styleinherit ={color:"black"}
  const MyFunctionComponent=props=>{
    const [name,setName]=useState("Arya Stark")
    const handleclick=()=>setName('tyron')
  }

  return (
    <>
      
    </>
  );
}

export default App;
