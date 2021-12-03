import { CSVLink } from 'react-csv';
import './ParticipantList.scss';
import Participant from '../Participant/Participant';

function ParticipantList ({ participants }) {
    console.log(participants);

    for (let i = 0; i < participants.length; i++) {
        let expList = {
            firstName: participants[i].firstName,
            lastName: participants[i].lastName,
            address: participants[i].address1 
                + participants[i].address2 
                + participants[i].city 
                + participants[i].province
                + participants[i].postalCode
                + participants[i].country,
    }
    console.log(expList);
    
    //how to export address labels to CSV see https://www.npmjs.com/package/react-csv 
    const data = [ expList ];

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
}

export default ParticipantList;