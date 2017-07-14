import React, { Component } from 'react';
import './footer.css';

class footer extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-first">
          <p>职位</p>
        </div>
         <div className="nav-two">
          <p>搜索</p>
        </div>
         <div className="nav-there">
          <p>我的</p>
        </div>
      </div>
    );
  }
}

export default footer
 