import React, { Component } from 'react';
import ComponentItem from './ComponentItem';
import $ from 'jquery';
import './ComponentItem.css'

class ComponentList extends Component{
	constructor(){
		super();
		this.state={
			newList:[],
			pageNo:1
		}
		this.handLoad=this.handLoad.bind(this);
	}
	componentWillMount(){
		var that=this;
		$.get("https://m.lagou.com/listmore.json?pageNo="+ that.state.pageNo+"&pageSize=15",function(Date){
			var result=Date.content.data.page.result
			that.setState({newList:result})
		})
	}
	handLoad(){
		this.setState({
			pageNo:this.state.pageNo+1,
		})
		var that=this;
		$.get("https://m.lagou.com/listmore.json?pageNo="+ that.state.pageNo+"&pageSize=15",function(Date){
			var result=Date.content.data.page.result;
			// newList =result.concat(Date.content.data.page.result);
			that.setState({newList:that.state.newList.concat(result)})
			console.log(that.state.newList.length)
		})
	}
	render(){
		var lists = this.state.newList.map(function(elem,idx){
			return <ComponentItem contentList={elem} key={idx} />
		})
		return (
      		<div>
	      		<ul className="list">
	       			{lists}
	       			<li className="loadMore" onClick={this.handLoad}>加载更多</li>
	       		</ul>
      		</div>
   		)
	}
}
export default ComponentList