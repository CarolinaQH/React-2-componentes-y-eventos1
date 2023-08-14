import { useState } from "react";
import "./App.css";
import Registro from "./components/Registro";





function App() {
  const [alert, setAlert] = useState({ msg: "", color: ""});
  return <Registro alert={alert} setAlert={setAlert}/>;

}

export default App;

