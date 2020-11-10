import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  

  handleSubmit = async event => {
    event.preventDefault();

    const { username, password } = this.state;

    

    

    try {

      //Kilpikalevi25
      //testerpassword
      const userslist = [];

      //testing only, need new method for usernames only to check if there is existing user for login.

      await fetch('http://localhost:9000/users/')
      .then(res => res.json())
      .then(data => userslist.push(data));
      

      //alert(userslist.user[0].username);
     alert(userslist[0].user[0].username);
    
      this.setState({ username: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your username and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='username'
            type='text'
            handleChange={this.handleChange}
            value={this.state.username}
            label='Username'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
