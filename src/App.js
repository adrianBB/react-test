import React, { Component } from 'react';
import './App-header.css';
import Custom from "./content/Custom-info";
import {Link,IndexLink} from "react-router"
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>拉勾网</p>
        </div>
        <Custom />
        <div className="footer">
          <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">职位</IndexLink></li>
          <li><Link to="/search" activeClassName="active">搜索</Link></li>
          <li><Link to="/ComponentLogin" activeClassName="active">我的</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
