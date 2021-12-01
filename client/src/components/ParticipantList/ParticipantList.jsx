import './ParticipantList.scss';
import Participant from '../Participant/Participant';

function ParticipantList ({ participants }) {
    console.log(participants);
    return (
        <article className="participants">
            <h1 className="participants__title">Participants List</h1>
            <ul className="participants__list">
                {participants
                    .map((participant) => {
                        console.log(participant);
                        return (
                        <li 
                                className="participants__item"
                                key={participants.id}>
                                <Participant {...participant} />

                        </li> 
                        );
                    }
                )}
            </ul>
        </article>
    )
}

export default ParticipantList;