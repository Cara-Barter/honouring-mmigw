import './FoodBurning.scss';
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';
import Honouree from '../Honouree/Honouree';
import Button from '../Button/Button';

function HonoureesList ({ honourees }) {
    
    let expList = [];

    for (let i = 0; i < honourees.sensitiveInfo.length; i++) {
        expList.push(
            {
                RegistrantName: honourees.sensitiveInfo[i].yourName,
                MMIWGName: honourees.sensitiveInfo[i].lovedOnesName,
                nation: honourees.sensitiveInfo[i].nation,
                gender: honourees.sensitiveInfo[i].gender,
                community: honourees.sensitiveInfo[i].community,
                relationship: honourees.sensitiveInfo[i].relationship
            }
        )
    }
    
    //how to export address labels to CSV see https://www.npmjs.com/package/react-csv 
    let data = expList;
    if(!honourees.sensitiveInfo) {
        return (
            <>
                <h1>loading...</h1>
                <Link to='/login' className="honourees__link">
                    <Button
                        className="honourees__btn"
                        text="Login" />
                </Link>
            </>
        )
    }
    return (
        <article className="honourees">
            <div className="honourees__container">
                <h1 className="honourees__title">MMIWG Food Burning List</h1>
                <CSVLink 
                    className="participants__csv" 
                    data={data}>Download List</CSVLink>
                <ul className="honourees__list">
                    {honourees.sensitiveInfo && honourees.sensitiveInfo
                        .map((honouree) => {
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
            </div>
        </article>
    )
}

export default HonoureesList;