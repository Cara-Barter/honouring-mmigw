import { Component } from 'react';
import axios from 'axios';

class SingleParticipant extends Component {

    // const { participant } = this.props;
    state = {
        singleParticipant: null
    }

    getSingleParticipant = (id) => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/participants/${id}`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    singleParticipant: response.data[0]
                });
            })
            .catch((error) => console.log(error));
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.getSingleParticipant(id);
    }

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
        if(!this.state.singleParticipant) {
            return <h2>loading...</h2>
        }
        console.log(this.state.singleParticipant);
        return (
            <article className='single'>
                <h2 className='single__title'>{this.state.singleParticipant.firstName }{this.state.singleParticipant.lastName}</h2>
                <p className='single__details'>
                    {this.state.singleParticipant.address1}
                    {this.state.singleParticipant.address2}
                    {this.state.singleParticipant.city}
                    {this.state.singleParticipant.province}
                    {this.state.singleParticipant.postalCode}
                    {this.state.singleParticipant.country}
                </p>
                <p className='single__details'>{this.state.singleParticipant.email}</p>
                <p className='single__details'>{this.state.singleParticipant.phone}</p>
                <p className='single__details'>{this.state.singleParticipant.nation}</p>
                <p className='single__details'>{this.state.singleParticipant.age}</p>
                <p className='single__details'>{this.state.singleParticipant.gender}</p>
                <p className='single__details'>{this.state.singleParticipant.survivor}</p>
                <p className='single__details'>{this.state.singleParticipant.organization}</p>
                <p className='single__details'>{this.state.singleParticipant.id}</p>
                <p className='single__details'>{this.state.singleParticipant.shirtSize}</p>
            </article>
        )
    }
}

export default SingleParticipant;