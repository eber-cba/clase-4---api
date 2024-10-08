import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [serie, setSerie] = useState([]);
  /*  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  useEffect(() => {
    console.log("useEffect");
  }, [nombre]); */
  const dropdownRef = useRef();

  const abrirDropdown = () => {
    dropdownRef.current.style.display = "block";
  };
  const cerrarDropdown = () => {
    dropdownRef.current.style.display = "none";
  };

  /* async function getRandomUser() {
    try {
      const res = await axios.get(
        "https://api.gameofthronesquotes.xyz/v1/random"
      );
      const data = res.data;
      setSerie(`"${data.sentence}" - ${data.character.name}`); // con setInfo
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getRandomUser();
  }, []); // el arreglo vacio es para que se ejecute solo una vez
 */
  return (
    <div>
      {/*  <label>
        Nombre:
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" onChange={(e) => setApellido(e.target.value)} />
      </label> */}
      {/*       <p>{serie}</p>
       */}{" "}
      <button onClick={abrirDropdown}>Abrir Dropdown</button>
      <button onClick={cerrarDropdown}>Cerrar Dropdown</button>
      <div ref={dropdownRef} className="dropdown" style={{ display: "none" }}>
        este es el contenido del dropdown
      </div>
    </div>
  );
}
export default App;
