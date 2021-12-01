import axios from 'axios';
import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Admin.scss';
import Button from '../../components/Button/Button';
import ParticipantList from '../../components/ParticipantList/ParticipantList';

class Admin extends Component {
    state = {
        participantsList: [],
        singleParticipant: {},
        honourees: []
    }

    getParticipants = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/participants`)
            .then((response) => {
                this.setState({
                    participantsList: response.data,
                    singleParticipant: response.data[0]
                });
                this.getSingleParticipant(response.data[0].id)
            })
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.getParticipants();
    }

    getSingleParticipant = (id) => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/participants/${id}`)
            .then((response) => {
                this.setState({
                    getSingleParticipant: response.data
                });
            })
            .catch((error) => console.log(error));
    }

    componentDidUpdate(prevProps, prevState) {
        const { id } = this.props.match.params;
        if(id) {
            if(prevState.singleParticipant.id !== id) {
                this.getSingleParticipant(id);
            }
        }
    }

    render() {
        return(
            <article className="admin">
                <nav className="admin__nav">
                    <Link to='/participants' className="admin__link">
                        <Button 
                            classname='admin__btn'
                            text='Walk Participants'
                        />
                    </Link>    
                </nav>
                <Switch>
                    <Route 
                        path='/participants'
                        participants={this.state.participantsList}
                        component={ParticipantList}                       
                    />
                    {/* <Route path='/foodburning' component={FoodBurning} /> */}
                </Switch>
            </article>
        )
    }
}

export default Admin;