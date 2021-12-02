import './Honouree.scss';

function Honouree ({honouree}) {
    console.log(honouree);
    return (
        <article className="honouree">
            <h2 className='honouree__title'>{honouree.yourName}</h2>
            <p className='honouree__details'>{honouree.lovedOnesName}</p>
            <p className='honouree__details'>{honouree.nation}</p>
            <p className='honouree__details'>{honouree.gender}</p>
            <p className='honouree__details'>{honouree.community}</p>
            <p className='honouree__details'>{honouree.relationship}</p>
        </article>
    )
}

export default Honouree;