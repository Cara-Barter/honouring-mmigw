import './Shirts.scss';

function Shirts ({ participants }) {
    console.log(participants);
    return (
        <article className='shirts'>
            <h1 className="shirts__title">T-Shirt List</h1>
            <ul className="shirts__list">
                {participants
                    .map((participant) => {
                        console.log(participant)
                        return (
                            <li 
                                className='shirts__item'
                                key={participant.id}>
                                   <p className='shirt__size'>{participant.shirtSize}</p>
                            </li>
                        );
                    }
                    )}
            </ul>
        </article>
    )
}

export default Shirts;