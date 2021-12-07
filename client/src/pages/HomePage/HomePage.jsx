import './HomePage.scss'
import logo from '../../assets/logo/MMIWG-logo.png';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import Gallery from '../../components/Gallery/Gallery';

function HomePage() {
  return (
    <article className="home">
        <div className="home__container">
        <h1 className="home__title">
          Honouring Missing and Murdered Indigenous Women, Girls and Boys
        </h1>
        <section className="home__wrapper">
          <div className="home__text-wrapper">
            <p className="home__text">
              Please join the Tsow Tun Lelum team on our journey starting March 6 for 60 days to honour
              MMIWG and their families. We've challenged ourselves & we extend an
              invite to you to join us in getting out and being active as we gear up
              to walk 5k on May 5 in honour of MMIWG.
            </p>
            <p className="home__tag">Countdown to event</p>
            <CountDownTimer />
          </div>
          <img 
            className="home__logo" 
            src={logo} 
            alt='art of woman in red dress with arms outstretched' />
        </section>
        <Gallery />
      </div>
    </article>
  );
}

export default HomePage;
