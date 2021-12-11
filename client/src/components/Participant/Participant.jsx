import './Participant.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function Participant ({participant}) {
    return (
        <article className='participant'>

            <h2 className='participant__title'>
                <span className='participant__name'> Name:</span>
                {` ${participant.firstName} ${participant.lastName}`}
            </h2>
            <p className='participant__details'>
                <span className='participant__name'>Address:</span>
                {` ${participant.address1}, 
                ${participant.address2}, 
                ${participant.city} 
                ${participant.province} 
                ${participant.postalCode} 
                ${participant.country}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Email: 
                </span>{` ${participant.email}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Phone: 
                </span>{` ${participant.phone}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Nation: 
                </span>{` ${participant.nation}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Age: 
                </span>{` ${participant.age}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Gender: 
                </span>{` ${participant.gender}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Survivor: 
                </span>{` ${participant.survivor}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Organization: 
                </span>{` ${participant.organization}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Id: 
                </span>{` ${participant.id}`}
            </p>
            <p className='participant__details'>
                <span className='participant__name'>
                    Shirt Size: 
                </span>{` ${participant.shirtSize}`}
                </p>
            <Link 
                to={`/admin/participants/${participant.id}`}
                className='participant__link'
            >
                <Button 
                    className='participant__btn'
                    text='See Details'
                />
            </Link>
        </article>
    )
}

export default Participant;