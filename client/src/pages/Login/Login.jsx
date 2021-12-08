import "./Login.scss";
import axios from "axios";
import { Component } from "react";
import { Route } from "react-router-dom";

import Button from "../../components/Button/Button";
import Admin from "../Admin/Admin";
import logo from '../../assets/logo/MMIWG-logo.png';

class Login extends Component {
  state = {
      isLoggedIn: false,
      profileData: null, 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      username: username,
      password: password
    }).then(response => {
      sessionStorage.setItem('clientAuthToken', response.data.token);
      this.fetchProfile(response.data.token);
    })
    .catch( err => console.log("login error", err))
  }

  fetchProfile = (token) => {
    axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      this.setState({
        profileData: response.data,
        isLoggedIn: true
      });
        this.props.history.push('/admin')
    }).catch(err => console.log('profile error', err))
  }

  componentDidMount() {
    const authToken = sessionStorage.getItem('clientAuthToken');
    this.fetchProfile(authToken)
  }

  render() {
    return (
      <div className="login">
        <div className="login__container">
          <h1 className="login__title">MMIWG Admin Login</h1>
          {!this.state.isLoggedIn && 
            <div className="login__wrapper">
              <form className="login__form" onSubmit={this.handleSubmit}>
                <input className="login__input" name="username" type="text" placeholder="User Name"/>
                <input className="login__input" name="password" type="password" placeholder="Password"/>
                <Button className='login__btn' type='submit' text='Submit' />
              </form>
              <img 
              className="honour__logo" 
              src={logo} 
              alt='art of woman in red dress with arms outstretched' />
            </div>
          }
          {this.state.isLoggedIn &&
          <>
              <Route path='/admin' render={(routerProps) => (
                  <Admin {...routerProps} />
              )}
              />
          </>
          }
        </div>
      </div>
    )
  }
}

export default Login;