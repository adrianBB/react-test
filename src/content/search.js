import React, { Component } from 'react';
import '../App-header.css';
import './search.css';
import './Search-city.css';
import $ from 'jquery';
import SearchCity from "./Search-city";
import SearchInput from "./Search-input";
import SearchItem from "./SearchItem";
import {Link,IndexLink} from "react-router"
class Search extends Component {
  constructor(){
    super();
    this.state={
      value:"",
      newList:[]
    }
    this.handonClick=this.handonClick.bind(this);
  }

  handonClick(){
    var that=this;
    $.get("https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName="+that.refs.jobName.value,function(Data){
      var result=Data.content.data.page.result
        that.setState({newList:result})
        $(".bgImg").css("background-color":"red")
    })
  }
  render() {
  
    var lists = this.state.newList.map(function(elem,idx){
      return <SearchItem contentList={elem} key={idx} />
    })
    return (
      <div className="App">
        <div className="App-header">
          <p>拉勾网</p>
        </div>
        <div className='search'>
          <div className="search-city" >
            <span className='cityName'>全国</span>
            <span className='cityIcon'></span>
          </div>
          <div className='ipt'>
            <input className="inputer" type="text" placeholder="搜索职位或公司" ref="jobName"></input>
          </div>
          <div className="bgImg" onClick={this.handonClick}>
            <span></span>
          </div>
        </div>
        <ul className="list">
          {lists}
        </ul>
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

export default Search;


