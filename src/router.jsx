import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { pages } from "./route.config.json";
import MarkDown from './components/markdown';

const PageRoutes = (props) => {
  return (
    <Routes {...props}>
      {
        pages.map((page) => (
          <Route
            key={page.md_key}
            element={<MarkDown pageKey={page.md_key} />}
            path={page.path}
          />
        ))
      }
    </Routes>
  )
};

export default PageRoutes;