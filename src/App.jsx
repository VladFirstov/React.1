import './App.css'
import Header from "./components/Header/Header.jsx";
import axios from "axios";
import {useState} from "react";
import Input from "./components/Input/Input.jsx";

function App() {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    axios.get('https://rickandmortyapi.com/api/character')
        .then(function (response) {

            setImage(response.data.results[0].image)
            setName(response.data.results[0].name)
        })
  return (
    <>
      <Header name={name} image={image} ></Header>
        <Input></Input>
    </>
  )
}

export default App
