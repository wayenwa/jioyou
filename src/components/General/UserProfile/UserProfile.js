import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class UserProfile extends React.Component  {
    constructor(props) {
		super(props);
		
		this.state = {
			profileMenu: ''
		};

		this.triggerToggleProfile = this.triggerToggleProfile.bind(this);

    }
    
    logout(){
        sessionStorage.removeItem('userData');
        this.props.history.push('/')
    }

	triggerToggleProfile() {
		this.setState({profileMenu: !this.state.profileMenu});
    }

    render() {
        let sessionUserData = JSON.parse(sessionStorage.getItem('userData'));
        let toggleProfile = this.state.profileMenu ? 'show' : '';

		return (
            <div style={{float:'left'}}>
                <div className="item profile-holder" onClick={this.triggerToggleProfile}>
                    <div className="left"><i className="fa fa-user-circle fa-2x"></i></div>
                    <div className="profile-name">{sessionUserData.name}</div>
                    <i className="fa fa-caret-down fa-1x"></i>

                    <div className={'profile-menu ' + toggleProfile}>
                        <div className="profile-menu-holder">
                            <Link to="/profile">Profile</Link>
                            <Link to="/" onClick={this.logout}>Log Out</Link>
                        </div>
                    </div>
                    <div className="clear"></div>
                    
                </div>
                <div className="sm-screen-profile-menu">
                    <div className="item">
                        <div className="content">
                            <Link to="" onClick={this.logout} >Logout</Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <Link to="/profile"><i className="fa fa-user-circle fa-2x"></i>{sessionUserData.name}</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default UserProfile;