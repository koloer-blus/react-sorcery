import { useState } from 'react'
import { Link, useRoutes,} from "react-router-dom";
import Routers from "@/routers/index.tsx";

function App() {
  let element = useRoutes(Routers);

  return (
    <div className="App">
      react-sorcery
      {element}
    </div>
  )
}

export default App
