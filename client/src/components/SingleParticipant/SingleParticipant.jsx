import { Component } from 'react';
import axios from 'axios';

class SingleParticipant extends Component {

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

    render() {
        if(!this.state.singleParticipant) {
            return <h2>loading...</h2>
        }

        const { singleParticipant } = this.state;

        return (
            <article className='single'>
                <h2 
                    className='single__title'>
                        {singleParticipant.firstName }
                        {singleParticipant.lastName}
                </h2>
                <p className='single__details'>
                    {singleParticipant.address1}
                    {singleParticipant.address2}
                    {singleParticipant.city}
                    {singleParticipant.province}
                    {singleParticipant.postalCode}
                    {singleParticipant.country}
                </p>
                <p className='single__details'>{singleParticipant.email}</p>
                <p className='single__details'>{singleParticipant.phone}</p>
                <p className='single__details'>{singleParticipant.nation}</p>
                <p className='single__details'>{singleParticipant.age}</p>
                <p className='single__details'>{singleParticipant.gender}</p>
                <p className='single__details'>{singleParticipant.survivor}</p>
                <p className='single__details'>{singleParticipant.organization}</p>
                <p className='single__details'>{singleParticipant.id}</p>
                <p className='single__details'>{singleParticipant.shirtSize}</p>
            </article>
        )
    }
}

export default SingleParticipant;