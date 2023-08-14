import React from "react";
import Alert from "./Alert";
import Formulario from "./Formulario";
import Button from "./Button";



const Registro = ({ alert, setAlert }) => {
    return (
        <>
  
        <Formulario alert={alert} setAlert={setAlert}>
        <div className="registro-container">
        <h1>Crea una cuenta</h1>
        </div>
          <div className="botones-contenedor">
          <Button icon="fab fa-facebook"></Button>
            <Button icon="fab fa-github"></Button>
            <Button icon="fab fa-linkedin-in"></Button>
            </div>
            <div className="texto2">
                <p>O usa tu email para registrarte</p>
          </div>
        </Formulario>
  
      

</>
);
};

export default Registro;