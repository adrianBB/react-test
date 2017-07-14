import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';

import './Custom-info.css';

class Custom extends Component {
  render() {
    return (
      <div className="custom">
        <div className="info">10秒钟定制职位</div>
        <div className="go"><Link to="/Registration" activeClassName="active">去登录</Link></div>
      </div>
    )
  }
}

export default Custom;
