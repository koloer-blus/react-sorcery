import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import PageRoutes from './router';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
