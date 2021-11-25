import './NotFound.scss';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NotFound extends Component {
    state = {
        Redirecting: false
    }

    render() {
        setTimeout (() => {this.setState({Redirecting: true})}, 3000);
        if(!this.state.Redirecting) { 
            return (
                <article className="not-found">
                    <section className="not-found__text-wrapper">
                        <p className="not-found__text">Oops! 404 Page Not Found</p>  
                        <p className="not-found__text">Let me help you.</p>
                    </section>
                </article>
            )
        } else {
            return(<Redirect to="/" /> )
        }
    }
}

export default NotFound;