import React, { Component } from 'react';

import './Search-city.css';
import {Link,IndexLink} from "react-router"
class SearchCity extends Component {
  render() {
    return (
      <div className='search'>
        <div className="search-city">
          <span className='cityName'>全国</span>
          <span className='cityIcon'></span>
        </div>
        
      </div>
    );
  }
}
export default SearchCity;