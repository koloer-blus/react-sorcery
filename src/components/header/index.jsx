import * as React from 'react';
import { Link } from 'react-router-dom';
import headerStyle from './header.module.less';

const Header = () => {
  return (
    <div className={headerStyle['doc-header']}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <input placeholder="搜索" />
    </div>
  )
};

export default Header;