import { CSVLink } from 'react-csv';
import './ParticipantList.scss';
import Participant from '../Participant/Participant';

function ParticipantList ({ participants }) {
    let expList = [];

    for (let i = 0; i < participants.sensitiveInfo.length; i++) {
        expList.push(
            {
                firstName: participants.sensitiveInfo[i].firstName,
                lastName: participants.sensitiveInfo[i].lastName,
                address1: participants.sensitiveInfo[i].address1,
                address2: participants.sensitiveInfo[i].address2,
                city: participants.sensitiveInfo[i].city,
                province: participants.sensitiveInfo[i].province,
                postalCode: participants.sensitiveInfo[i].postalCode,
                country: participants.sensitiveInfo[i].country,
            }
        )
    }
    
    //how to export address labels to CSV see https://www.npmjs.com/package/react-csv 
    let data = expList;
    if(!participants.sensitiveInfo) {
        return <h1>loading...</h1>
    }
    return (
        <article className="participants">
            <h1 className="participants__title">Participants List</h1>
            <CSVLink data={data}>Download List</CSVLink>
            <ul className="participants__list">
                {participants.sensitiveInfo
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