import * as React from 'react';
import { HashRouter } from "react-router-dom";
import PageRoutes from './router';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <PageRoutes />
      </HashRouter>
    </div>
  )
}

export default App
