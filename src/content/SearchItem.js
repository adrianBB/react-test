import React, { Component } from 'react';
import './SearchItem.css';

import {Link,IndexLink} from "react-router"
class SearchItem extends Component {
  render() {
    var {contentList}=this.props;
    
    var Image = "//www.lgstatic.com/" + contentList.companyLogo
    return (
      <div>
        <li className="list-item"><Link to="/Details" activeClassName="active">
          <img src={Image} className="item-logo" className="item-logo"/>
            <div className="item-desc">
              <h2 className="item-title">{contentList.companyName}</h2>
              <p className="item-info">
                <span className="item-pos">
                  {contentList.positionName} [{contentList.city}]
                </span>
                <span className="item-salary">{contentList.salary}</span>            
              </p>
              <p className="item-time">{contentList.createTime}</p>
            </div></Link>
        </li>
      </div>
    );
  }
}

export default SearchItem;