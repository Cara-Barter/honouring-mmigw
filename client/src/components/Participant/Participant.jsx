import './Participant.scss';
import { Link } from 'react-router-dom';

function Participant ({participant}) {
    console.log(participant);
    return (
        <article className='participant'>
            <h2 className='participant__title'>{participant.firstName }{participant.lastName}</h2>
            <p className='participant__details'>
                {participant.address1}
                {participant.address2}
                {participant.city}
                {participant.province}
                {participant.postalCode}
                {participant.country}
            </p>
            <p className='participant__details'>{participant.email}</p>
            <p className='participant__details'>{participant.phone}</p>
            <p className='participant__details'>{participant.nation}</p>
            <p className='participant__details'>{participant.age}</p>
            <p className='participant__details'>{participant.gender}</p>
            <p className='participant__details'>{participant.survivor}</p>
            <p className='participant__details'>{participant.organization}</p>
            <p className='participant__details'>{participant.id}</p>
            <p className='participant__details'>{participant.shirtSize}</p>
            <Link to={`/admin/participants/${participant.id}`}>view</Link>
        </article>
    )
}

export default Participant;