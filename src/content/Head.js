import React ,{Component} from 'react';
import './Head.css';
import {Link}  from 'react-router';


class Head extends Component {
	constructor(){
    	super();
	    this.state={
	    	
	    }
	}
	render(){
		return(
            <header id="header"><Link to="/ComponentPosition" className={this.props.back}>&lt;</Link>{this.props.title}<Link to="/" className={this.props.home}></Link></header>
		)
	}
}

export default Head