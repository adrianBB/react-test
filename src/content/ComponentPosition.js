import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import '../App-header.css';
import './ComponentPosition.css';
import Custom from "./Custom-info";
import ComponentList from './ComponentList';

class ComponentPosition extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>拉勾网</p>
        </div>
         <Custom />
         <ComponentList />
        <div className="footer">
          <ul role="nav">
          <li><IndexLink to="/ComponentPosition" activeClassName="active"><p></p>职位</IndexLink></li>
          <li><Link to="/search" activeClassName="active"><p></p>搜索</Link></li>
          <li><Link to="/ComponentLogin" activeClassName="active"><p></p>我的</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ComponentPosition;
