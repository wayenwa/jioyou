import React from 'react';
import { Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import { PostData } from '../../../services/PostData';

class LoginForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email:'',
            password:'',
            error: false
            // loggedIn: false
        }
        this.toggle = this.toggle.bind(this);
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        if(this.state.email && this.state.password){
            PostData('login', this.state).then((result) => {
                let responseJSON = result;
                
                if(responseJSON.userData){
                    sessionStorage.setItem('userData', JSON.stringify(responseJSON.userData));
                    console.log(responseJSON.userData);
                    window.location.reload();
                    // this.setState({loggedIn: true});
                }else{
                    this.setState({error: responseJSON.error});
                }
            })
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        //console.log(this.state);
    }

    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

    render() {
        let sessionUserData = JSON.parse(sessionStorage.getItem('userData'));
        let errorMessage = (this.state.error) ? this.state.error : '';
        
        // console.log(sessionUserData);
        if(sessionUserData == null){
            return(
                <div>
                    <Link to="/" color="info" className="green-button" style={{marginTop: '20px'}} onClick={this.toggle}>Login</Link>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                    <div className="modal-header primary-color white-text stripe-bg">
                        <h4 className="title">
                        <Fa className="fa fa-pencil" /> Log In</h4>
                        <button type="button" className="close" onClick={this.toggle}>
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <ModalBody className="grey-text">
                        <div className="errorMessage">{errorMessage}</div>
                        <form>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Your email</label>
                            <input type="email" id="defaultFormLoginEmailEx" name="email" className="form-control" onChange={this.onChange}/>
                            <br/>
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Your password</label>
                            <input type="text" id="defaultFormLoginPasswordEx" name="password" className="form-control" onChange={this.onChange}/>
                            <div className="text-center mt-4">
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                        <input type="submit" value="Login" className="button" onClick={this.login}/>
                    </ModalFooter>
                    </Modal>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
        
    }
};

export default LoginForm;