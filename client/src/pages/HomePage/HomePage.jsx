import './HomePage.scss'
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';

function HomePage() {
  return (
    <article className="home">
      <h1 className="home__title">
        Honouring Missing and Murdered Indigenous Women, Girls and Boys
      </h1>
      <p className="home__text">
        Please join our TTLL team on our journey starting March 6 for 60 days to honour
        MMIWG and their families. We've challenged ourselves & we extend an
        invite to you to join us in getting out and being active as we gear up
        to walk 5k on May 5 in honour of MMIWG.
      </p>
      <p className="home__text">Countdown to event</p>
      <CountDownTimer />
    </article>
  );
}

export default HomePage;
