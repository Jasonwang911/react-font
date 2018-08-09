import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss'

class FootNav extends Component {
  render() {
    return (
      <div className="foot-nav">
        <NavLink to="/"  className="index">
          <div></div>
          <p>首页</p>
        </NavLink>
        <NavLink to="/newsList"  className="news-list">
          <div></div>
          <p>资讯</p>
        </NavLink>
        <NavLink to="/mine" className="mine">
          <div></div>
          <p>首页</p>
        </NavLink>
      </div>
    );
  }
}

export default FootNav;