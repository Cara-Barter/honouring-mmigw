import "./HomePage.scss";
import logo from "../../assets/logo/MMIWG-logo.png";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import Gallery from "../../components/Gallery/Gallery";

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
              The 60 x 60 event was created in an effort to raise awareness,
              acknowledge and honour the memory of the lost loved ones of MMIWG.
            </p>
            <p className="home__text">
              Our goal was to create an independent event where we asked people
              to join us in getting out and being active 60 days before May 5,
              which is National Missing and Murdered Indigenous Women and Girls
              Awareness Day.
            </p>
            <p className="home__text">
              We took to social media and asked people to join us
              in walking, running, or biking in honour and in memory of the lost
              loved ones of MMIWG for 60 days and up to 60 minutes a day leading
              up to May 5. In return, our organization provided a free MMIWG
              T-shirt and mask to all that registered.
            </p>
            <p className="home__text">
               The 60x60 event prompted
              our team to mobilize to take care of the lost loved ones that were
              brought home to their final resting place by using the sacred
              Coast Salish tradition of preparing and providing food at a food
              burning.
            </p>
            <p className="home__text">
               Our future goal is have this event be opened up to the
              families that are able to attend so they can witness the ceremony
              in person.
            </p>
            <div className="home__count-wrapper">
              <p className="home__tag">Countdown to event</p>
              <CountDownTimer />
            </div>
          </div>
          <img
            className="home__logo"
            src={logo}
            alt="art of woman in red dress with arms outstretched"
          />
        </section>
        <Gallery />
      </div>
    </article>
  );
}

export default HomePage;
