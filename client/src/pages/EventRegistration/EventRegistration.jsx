import './EventRegistration.scss';
import { useState } from 'react';

function EventRegistration () {
    const [ shirtSize, setShirtSize] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastname ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ address2, setAddress2 ] = useState('');
    const [ city, setCity ] = useState('');
    const [ province, setProvince ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ postalCode, setPostalCode ] = useState('');
    const [ age, setAge ] = useState('');
    const [ nation, setNation ] = useState('');
    const [ walkingFor, setWalkingFor ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ organization, setOrganization ] = useState('');
    const [ survivor, setSurvivor ] = useState('');

    return (
        <article className="event">
            <h1 className="event__title">Honouring MMIGW Event Registration</h1>
        </article>
    )
}

export default EventRegistration;