import axios from 'axios';
import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Admin.scss';
import Button from '../../components/Button/Button';
import ParticipantList from '../../components/ParticipantList/ParticipantList';
import SingleParticipant from '../../components/SingleParticipant/SingleParticipant';
import FoodBurning from '../../components/FoodBurning/FoodBurning';

class Admin extends Component {
    state = {
        participantsList: null,
        // singleParticipant: {},
        honourees: []
    }

    getParticipants = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/participants`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    participantsList: response.data,
                    // singleParticipant: response.data[0]
                });
                this.getSingleParticipant(response.data[0].id)
            })
            .catch((error) => console.log(error));
    }

    getHonourees = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/foodburning`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    honourees: response.data,
                });
            })
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.getParticipants();
        this.getHonourees();
        console.log(this.props);
    }

    // getSingleParticipant = (id) => {
    //     axios
    //         .get(`${process.env.REACT_APP_API_URL}/participants/${id}`)
    //         .then((response) => {
    //             console.log(response.data);
    //             this.setState({
    //                 singleParticipant: response.data[0]
    //             });
    //         })
    //         .catch((error) => console.log(error));
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const { id } = this.props.match.params;
    //     console.log('in params id', id);
    //     if(id) {
    //         if(prevState.singleParticipant.id !== id) {
    //             console.log('going to get single participant');
    //             this.getSingleParticipant(id);
    //         }
    //     }
    // }

    render() {
        console.log(this.state.participantsList);
        // console.log(this.state.singleParticipant);
        if(!this.state.participantsList) {
            return <h1>loading...</h1>
        }
        return(
            <article className="admin">
                <nav className="admin__nav">
                    <Link to='/admin/participants' className="admin__link">
                        <Button 
                            classname='admin__btn'
                            text='Walk Participants'
                        />
                    </Link> 
                    <Link to='/admin/foodburning' className="admin__link">
                        <Button 
                            classname='admin__btn'
                            text='MMIWG Food Burning'
                        />
                    </Link>      
                </nav>
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
                        path='/admin/participants/:id'
                        render={(routerProps) => (
                            <SingleParticipant  
                                {...routerProps} />
                          )}                
                    />
                    <Route 
                        path='/foodburning' 
                        honourees= {this.state.honourees}
                        component={FoodBurning} />
                </Switch>
                
            </article>
        )
    }
}

export default Admin;