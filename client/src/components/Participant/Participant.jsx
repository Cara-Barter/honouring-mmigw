import './Participant.scss';
import { Link } from 'react-router-dom';
// import { CSVLink, CSVDownload } from 'react-csv';
import Button from '../Button/Button';

function Participant ({participant}) {

    // //how to export address labels to CSV see https://www.npmjs.com/package/react-csv 
    // const data = [
    //     {
    //         firstName: participant.firstName,
    //         lastName: participant.lastName,
    //         address: participant.address1 
    //             + participant.address2 
    //             + participant.city 
    //             + participant.province
    //             + participant.postalCode
    //             + participant.country,
    //     },
    // ];

    return (
        <article className='participant'>
            {/* <CSVLink data={data}>Download List</CSVLink> */}
            <h2 className='participant__title'>
                {participant.firstName } 
                {participant.lastName}
            </h2>
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