import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/template/header.css';
import 'font-awesome/css/font-awesome.min.css';
import UserProfile from '../General/UserProfile/UserProfile';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			active: ''
		};

		this.triggerToggle = this.triggerToggle.bind(this);

	}
	triggerToggle() {
		this.setState({active: !this.state.active});
	}
	render() {
		let sessionUserData = JSON.parse(sessionStorage.getItem('userData'));
		let displayProfile;
		if(sessionUserData != null){
			displayProfile = ( <UserProfile /> );
		}else{
			displayProfile = '';
		}

		let toggle = this.state.active ? 'show' : '';
		return (
            <div className="header-holder ">
				<div className="row">
					<div className="col">
					
					</div>
					
					<div className="col">
						<div id="menu-icon" onClick={this.triggerToggle}><i className="fa fa-bars fa-1x"></i></div>
						<nav className="primary-menu">
							<div className={'navbar-list right ' + toggle}>
								<div className="item"><div className="content"><Link to="/" onClick={this.triggerToggle}>Home</Link></div></div>
								<div className="item"><div className="content"><Link to="/join" onClick={this.triggerToggle}>Join a Game</Link></div></div>
								<div className="item"><div className="content"><Link to="/host" onClick={this.triggerToggle}>Host a Game</Link></div></div>
								<div className="item"><div className="content"><Link to="/book" onClick={this.triggerToggle}>Book a Pitch</Link></div></div>
								{ displayProfile  }
							</div>
						</nav>
						
					</div>
				</div>
				<div className="clear"></div>
				
			</div>
        )
	}
}


export default Header;

