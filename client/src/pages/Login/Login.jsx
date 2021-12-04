import axios from "axios";
import { Component } from "react";

import Button from "../../components/Button/Button";
import Admin from "../Admin/Admin";

class Login extends Component {
    state = {
        isLoggedIn: false,
        profileData: null,
        isRedirecting: false   
    }

    
    componentDidMount() {
        const authToken = sessionStorage.getItem('clientAuthToken');
        this.fetchProfile(authToken)
      }

    handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        axios.post('http://localhost:5000/login', {
            username: username,
            password: password
        }).then(response => {
            sessionStorage.setItem('clientAuthToken', response.data.token);
            this.fetchProfile(response.data.token);
        })
        .catch( err => console.log("login error", err))
    }

    fetchProfile = (token) => {
        axios.get('http://localhost:5000/profile', {
          headers: {
            authorization: `Bearer ${token}`
          }
        }).then(response => {
          this.setState({
            profileData: response.data,
            isLoggedIn: true});
        }).catch(err => console.log('profile error', err))
      }

    //   componentDidMount() {
    //     const authToken = sessionStorage.getItem('clientAuthToken');
    //     this.fetchProfile(authToken)
    //   }

      render() {
        return (
          <div>
            <h1>MMIWG Admin Login</h1>
            {!this.state.isLoggedIn && 
              <form onSubmit={this.handleSubmit}>
                <h2>Login Form</h2>
                <input name="username" type="text" placeholder="User Name"/>
                <input name="password" type="password" placeholder="Password"/>
                <Button className='login__btn' type='submit' text='Submit' />
              </form>
            }
            {this.state.isLoggedIn &&
            <>
                {/* <Route path='/admin' render={(routerProps) => ( */}
                    <Admin />
                    {/* )}
                /> */}
            </>
            }
          </div>
        )
      }
}

export default Login;