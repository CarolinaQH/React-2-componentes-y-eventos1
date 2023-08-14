import React, { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const Formulario = ({ alert, setAlert, children }) => {
   const [nombre, setNombre] = useState ("");  
   const [email, setEmail] = useState ("")  
   const [password, setPassword] = useState ("")  
   const [confirmPassword, setConfirmPassword] = useState ("")  


  const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


    
      const validarDatos = (e) => {
        e.preventDefault();
    
        if (!validarEmail(email)) {
          setAlert({
            msg: "Ingresa un email válido.",
            color: "danger",
          });
          return;
        }
    
        if (password !== confirmPassword) {
          setAlert({
            msg: "Las contraseñas no coinciden.",
            color: "danger",
          });
          return;
        }
    
        if (nombre === "" || email === "" || password === "" || confirmPassword === "") {
          setAlert({
            msg: "Completa todos los campos.",
            color: "danger",
          });
          return;
        }
    
        setAlert({
          msg: "Cuenta creada exitosamente.",
          color: "success",
        });;
      };
    

   return ( 
   <>

   <div>
        <form onSubmit={validarDatos} className="formulario-contenedor">{children}
     
        <input 
         type="text" 
         name="nombre" 
         placeholder="Nombre" 
         value={nombre} 
         onChange={(e) => setNombre(e.target.value)}
        />
        
        <input 
         type="text" 
         name="email" 
         placeholder="tuemail@ejemplo.com" 
         value={email} 
         onChange={(e) => setEmail(e.target.value)}
        />

        <input 
         type="password" 
         name="password" 
         placeholder="Contraseña" 
         value={password} 
         onChange={(e) => setPassword(e.target.value)}
        />

         <input 
         type="password" 
         name="password" 
         placeholder="Confirma tu contraseña" 
         value={confirmPassword} 
         onChange={(e) => setConfirmPassword(e.target.value)}
        />
      <button type="submit" className="boton-registrarse">Registrarse</button>
      {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
    </form>
    </div>
    </>
)
   }



export default Formulario;