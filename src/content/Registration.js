import React, { Component } from 'react';
import {PropTypes} from "prop-types"
import './Registration.css';
import {Link,IndexLink} from "react-router"
class Registration extends Component {
	constructor(){
		super();
		this.state={
			value:""
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	handleChange(event){
		this.setState=({
			value:event.target.value,
		})
	}
	handleClick(){
		if (isNaN(this.setState.value)) {
			alert("可以用")
			return
		}else{
			alert("不可以用的");
		}
	}
  render() {
  	 
    return (
    <div className="radial">
	    	<div className="new_wrapper">
		    <form data-view="loginView">
		    	<div className="new_register">
		    		<div data-propertyname="username" data-controltype="Phone">
		    			<input type="text" placeholder="已验证手机/邮箱" className="border_btm r_email top" onChange={this.handleChange}/>
		    		</div>
		    		<div data-propertyname="password" data-controltype="Password">
						<div>
							<input type="password" placeholder="密码" className="r_psw btm"/>
							<i className="eye"></i>
						</div>
		    		</div>
		    		<div data-propertyname="submit" data-controltype="Botton">
	    				<input type="button" className="btn_green" value="登录" onClick={this.handleClick}/>
	    			</div>
		    	</div>
		    </form>
		    <div className="register_text">还没帐号？</div>
		    <div className="btn_green_border">注册</div>
		</div>
	</div>
    );
  }
}
export default Registration;


