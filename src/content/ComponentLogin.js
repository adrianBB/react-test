import React, { Component } from 'react';
import '../App-header.css';
import './ComponentLogin.css';

import {Link,IndexLink} from "react-router"
class ComponentLogin extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>拉勾网</p>
        </div>
        <div className="LoginUser"><Link to="/Registration">登录/注册</Link></div>
	       <div id="content">
	       <div className="leftContent">投递</div>
	       <div className="rightContent">面试</div>
	       <div className="bottomContent">邀约</div>
	       <div className="rightbottomContent">收藏</div>
        </div>
        <div className="footer">
          <ul role="nav">
          <li><Link to="/ComponentPosition" activeClassName="active"><p></p>职位</Link></li>
          <li><Link to="/search" activeClassName="active"><p></p>搜索</Link></li>
          <li><Link to="/ComponentLogin" activeClassName="active"><p></p>我的</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ComponentLogin;






