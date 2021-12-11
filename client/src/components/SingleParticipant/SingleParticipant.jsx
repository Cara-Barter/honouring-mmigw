import './SingleParticipant.scss';
import { Component } from 'react';
import axios from 'axios';

class SingleParticipant extends Component {

    state = {
        singleParticipant: null
    }

    getSingleParticipant = (id) => {
        const authToken = sessionStorage.getItem('clientAuthToken');
        axios
            .get(`${process.env.REACT_APP_API_URL}/participants/${id}`,{
                headers: {
                  authorization: `Bearer ${authToken}`
                }
            })
            .then((response) => {
                this.setState({
                    singleParticipant: response.data.sensitiveInfo[0]
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
                <div className="single__container">
                    <h1 className='single__title'>Participant Details</h1>
                    <p 
                        className='single__details'>
                            <span className='single__label'>
                                Name:
                            </span>
                                {`  ${singleParticipant.firstName} 
                                ${singleParticipant.lastName}`}

                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Address:
                        </span>
                            {`  ${singleParticipant.address1},
                            ${singleParticipant.address2},
                            ${singleParticipant.city},
                            ${singleParticipant.province} 
                            ${singleParticipant.postalCode} 
                            ${singleParticipant.country}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Email: 
                        </span>{`  ${singleParticipant.email}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Phone: 
                        </span>{`  ${singleParticipant.phone}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Nation:
                        </span>{`  ${singleParticipant.nation}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Age:
                        </span>{`  ${singleParticipant.age}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Gender:
                        </span>{`  ${singleParticipant.gender}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Survivor:
                        </span>{`  ${singleParticipant.survivor}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Organization:
                        </span>{`  ${singleParticipant.organization}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Id:
                        </span>{`  ${singleParticipant.id}`}
                    </p>
                    <p className='single__details'>
                        <span className='single__label'>
                            Shirt Size:
                        </span>{`  ${singleParticipant.shirtSize}`}
                    </p>
                </div>
            </article>
        )
    }
}

export default SingleParticipant;