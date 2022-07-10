import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Layout:React.FC = () => {
  return(
    <React.Fragment>
      <h2>Layout</h2>
      <hr />
      {<Outlet />}
    </React.Fragment>
  )
}

export default Layout;