import React from 'react';
import { Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import { PostData } from '../../../services/PostData';
import FormErrors from '../FormErrors';

class RegisterForm extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        name: '',
        email:'',
        password:'',
        c_password:'',
        formErrors: {email: '', password: '', name:'', c_password:''},
        emailValid: false,
        passwordValid: false,
        nameValid: false,
        cPasswordValid: false,
        formValid: false
        // loggedIn: false
    }
    this.toggle = this.toggle.bind(this);
    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  register(){
    if(this.state.name && this.state.email && this.state.password && this.state.c_password && this.state.password === this.state.c_password){
        PostData('register', this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON);
            if(responseJSON.userData){
                sessionStorage.setItem('userData', JSON.stringify(responseJSON.userData));
                window.location.reload();
                //console.log(responseJSON.userData);
                // this.setState({loggedIn: true});
            }else{
                console.log('Regisgter error');
            }
        })
    }
  }

  onChange(e){
    // this.setState({[e.target.name]: e.target.value});
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                  () => { this.validateField(name, value) });
    // console.log(this.state);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let nameValid = this.state.nameValid;
    let cPasswordValid = this.state.cPasswordValid;

    console.log(this.state);
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': 'Password is too short';
        break;
      case 'name':
        nameValid = value.length >= 2;
        fieldValidationErrors.name = nameValid ? '': 'Name is too short';
        break;
      case 'c_password':
        cPasswordValid = value;
        fieldValidationErrors.c_password = (cPasswordValid == this.state.password) ? '': 'Password not matched.';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    nameValid: nameValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.nameValid});
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() { console.log();
    let sessionUserData = JSON.parse(sessionStorage.getItem('userData'));
    let nameError  = (this.state.formErrors['name']) ? this.state.formErrors['name'] : ''; 
    let emailError  = (this.state.formErrors['email']) ? this.state.formErrors['email'] : ''; 
    let passwordError  = (this.state.formErrors['password']) ? this.state.formErrors['password'] : ''; 
    let confirmError  = (this.state.formErrors['c_password']) ? this.state.formErrors['c_password'] : ''; 
    if(sessionUserData == null){
      return(
          <div>
              <Link to="/" color="info" className="green-button" style={{marginTop: '20px'}} onClick={this.toggle}>Sign Up</Link>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                <div className="modal-header primary-color white-text stripe-bg">
                  <h4 className="title">
                    <Fa className="fa fa-pencil" /> Sign Up</h4>
                  <button type="button" className="close" onClick={this.toggle}>
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <ModalBody className="grey-text">
                  <form>
                      <label className="grey-text">Name</label>
                      <input type="text" name="name" className="form-control" onChange={this.onChange}/>
                      <div className="input-error">{nameError}</div>

                      <label  className="grey-text">Email</label>
                      <input type="email"  name="email" className="form-control" onChange={this.onChange}/>
                      <div className="input-error">{emailError}</div>

                      <label className="grey-text">Password</label>
                      <input type="password"  name="password" className="form-control" onChange={this.onChange}/>
                      <div className="input-error">{passwordError}</div>

                      <label className="grey-text">Confirm Password</label>
                      <input type="password" name="c_password" className="form-control" onChange={this.onChange}/>
                      <div className="input-error">{confirmError}</div>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                  <input type="submit" value="Login" className="button" onClick={this.register}/>
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

export default RegisterForm;