import Navbar from "./components/navbar";
import Client from "./components/api";
import { useState } from "react";
function App() {
  const [ state,setState] = useState("nature")
   return (
    <div className="App">
<Navbar setState={setState}/>
< Client query={state}/>

    </div>
  );
}

export default App;
