import './FoodBurning.scss';
import Honouree from '../Honouree/Honouree';

function HonoureesList ({ honourees }) {
    console.log(honourees);
    
    return (
        <article className="honourees">
            <h1 className="honourees__title">MMIWG Food Burning List</h1>
            <ul className="honourees__list">
                {honourees.sensitiveInfo && honourees.sensitiveInfo
                    .map((honouree) => {
                        console.log(honouree);
                        return (
                        <li 
                                className="honourees__item"
                                key={honouree.id}>
                                <Honouree honouree={honouree} />
                        </li> 
                        );
                    }
                )}
            </ul>
        </article>
    )
}

export default HonoureesList;