import './Shirts.scss';

function Shirts ({ participants }) {
    const shirtsNeeded = {
        small: 0,
        medium: 0,
        large: 0,
        XL: 0,
        XXL: 0,
        XXXL: 0,
        XXXXL: 0
    }
    
   if(participants.sensitiveInfo) {
        for (let i = 0; i < participants.sensitiveInfo.length; i++) {
            let shirt = participants.sensitiveInfo[i].shirtSize;
            switch(shirt) {
                case 'Small': shirtsNeeded.small++; break;
                case 'Medium': shirtsNeeded.medium++; break;
                case 'Large': shirtsNeeded.large++; break;
                case 'XL': shirtsNeeded.XL++; break;
                case 'XXL': shirtsNeeded.XXL++; break;
                case 'XXXL': shirtsNeeded.XXXL++; break;
                case 'XXXXL': shirtsNeeded.XXXXL++; break;
                default: shirtsNeeded.large++;
            }
        }
    }

    return (
        <article className='shirts'>
            <h1 className="shirts__title">T-Shirt List</h1>
            <p className='shirts__text'>Small: {shirtsNeeded.small}</p>
            <p className='shirts__text'>Medium: {shirtsNeeded.medium}</p>
            <p className='shirts__text'>Large: {shirtsNeeded.large}</p>
            <p className='shirts__text'>XL: {shirtsNeeded.XL}</p>
            <p className='shirts__text'>XXL: {shirtsNeeded.XXL}</p>
            <p className='shirts__text'>XXXL: {shirtsNeeded.XXXL}</p>
            <p className='shirts__text'>XXXXL: {shirtsNeeded.XXXXL}</p>
        </article>
    )
    
}

export default Shirts;