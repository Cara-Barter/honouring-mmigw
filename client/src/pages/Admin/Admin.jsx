import './Admin.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Admin.scss';
import Button from '../../components/Button/Button';
import logo from '../../assets/logo/MMIWG-logo.png';
import ParticipantList from '../../components/ParticipantList/ParticipantList';
import Shirts from '../../components/Shirts/Shirts';
import SingleParticipant from '../../components/SingleParticipant/SingleParticipant';
import FoodBurning from '../../components/FoodBurning/FoodBurning';

class Admin extends Component {
    state = {
        participantsList: null,
        honourees: []
    }

    getParticipants = () => {
        const authToken = sessionStorage.getItem('clientAuthToken');
        axios
        .get(`${process.env.REACT_APP_API_URL}/participants`, {
            headers: {
              authorization: `Bearer ${authToken}`
            }
            })
            .then((response) => {
                this.setState({
                    participantsList: response.data,
                });
            })
            .catch((error) => console.log(error));
    }

    getHonourees = () => {
        const authToken = sessionStorage.getItem('clientAuthToken');
        axios
            .get(`${process.env.REACT_APP_API_URL}/foodburning`,{
                headers: {
                  authorization: `Bearer ${authToken}`
                }
                })
            .then((response) => {
                this.setState({
                    honourees: response.data,
                });
            })
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.getParticipants();
        this.getHonourees();
    }

    render() {
        if(!this.state.participantsList) {
            return <h1>loading...</h1>
        }
        
        return(
            <article className="admin">
                <section className="admin__wrapper">
                    <nav className="admin__nav">
                        <Link to='/admin/participants' className="admin__link">
                            <Button 
                                className='admin__btn'
                                text='Walk Participants'
                            />
                        </Link> 
                        <Link to='/admin/shirts' className="admin__link">
                            <Button 
                                className='admin__btn'
                                text='T-Shirts List'
                            />
                        </Link>
                        <Link to='/admin/foodburning' className="admin__link">
                            <Button 
                                className='admin__btn'
                                text='Food Burning'
                            />
                        </Link>      
                    </nav>
                    <img 
                        className="admin__logo" 
                        src={logo} 
                        alt='art of woman in red dress with arms outstretched' />
                    </section>
                <Switch>
                    <Route 
                        path='/admin/participants'
                        exact
                        render={(routerProps) => (
                            <ParticipantList  
                                participants={this.state.participantsList}   
                                {...routerProps} />
                          )}                
                    />
                    <Route 
                        path='/admin/shirts'
                        render={(routerProps) => (
                            <Shirts 
                                participants={this.state.participantsList}   
                                {...routerProps} />
                          )}                
                    />
                    <Route 
                        path='/admin/participants/:id'
                        render={(routerProps) => (
                            <SingleParticipant  
                                {...routerProps} />
                          )}                
                    />
                    <Route 
                        path='/admin/foodburning' 
                        render={(routerProps) => (
                        <FoodBurning
                        honourees= {this.state.honourees}
                            {...routerProps} />
                        )}   
                    />
                </Switch>
                
            </article>
        )
    }
    
}

export default Admin;