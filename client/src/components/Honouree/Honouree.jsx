import './Honouree.scss';

function Honouree ({honouree}) {
    console.log(honouree);
    return (
        <article className="honouree">
            <div className="honouree__container">
                <h2 className='honouree__title'>
                    <span className='honouree__label'>
                        Registrant's Name:
                    </span>{` ${honouree.yourName}`}
                </h2>
                <p className='honouree__details'>
                    <span className='honouree__label'>
                        MMIWG Name:
                    </span>{` ${honouree.lovedOnesName}`}
                </p>
                <p className='honouree__details'>
                    <span className='honouree__label'>
                        Their Nation:
                    </span>{` ${honouree.nation}`}
                </p>
                <p className='honouree__details'>
                    <span className='honouree__label'>
                        Their Gender:
                    </span>{` ${honouree.gender}`}
                </p>
                <p className='honouree__details'>
                    <span className='honouree__label'>
                        Their Community:
                    </span>{` ${honouree.community}`}
                </p>
                <p className='honouree__details'>
                    <span className='honouree__label'>
                        Relationship:
                    </span>{` ${honouree.relationship}`}
                </p>
            </div>
        </article>
    )
}

export default Honouree;