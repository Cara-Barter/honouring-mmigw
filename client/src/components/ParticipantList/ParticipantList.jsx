import { CSVLink } from 'react-csv';
import './ParticipantList.scss';
import Participant from '../Participant/Participant';

function ParticipantList ({ participants }) {

    let expList = [];

    for (let i = 0; i < participants.length; i++) {
        expList.push(
            {
                firstName: participants[i].firstName,
                lastName: participants[i].lastName,
                address1: participants[i].address1,
                address2: participants[i].address2,
                city: participants[i].city,
                province: participants[i].province,
                postalCode: participants[i].postalCode,
                country: participants[i].country,
            }
        )
    }
    
    //how to export address labels to CSV see https://www.npmjs.com/package/react-csv 
    let data = expList;

    return (
        <article className="participants">
            <h1 className="participants__title">Participants List</h1>
            <CSVLink data={data}>Download List</CSVLink>
            <ul className="participants__list">
                {participants
                    .map((participant) => {
                        return (
                            <li 
                                    className="participants__item"
                                    key={participant.id}>
                                        <Participant participant={participant} />
                            </li> 
                        );
                    }
                )}
            </ul>   
        </article>
    )

}

export default ParticipantList;