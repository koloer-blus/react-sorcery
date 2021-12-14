import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { pages } from "./route.config.json";
import RegistryComponents from './registry';

const PageRoutes = (props) => {
  return (
    <Routes {...props}>
      {
        pages.map((page, index) => (
          <Route
            key={`${page.element}-${index}`}
            element={RegistryComponents[page.element]}
            path={page.path}
          />
        ))
      }
    </Routes>
  )
};

export default PageRoutes;