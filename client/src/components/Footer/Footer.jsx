import './Footer.scss';

function Footer() {
  return (
    <article className="footer">
      <h2 className="footer__title">Contact Us</h2>
      <p className="footer__text">
        RHSW Program Coordinator
      </p>
      <a href="mailto:RHSWCoor@tsowtunlelum.org" className="footer__link">
        <p className="footer__text">RHSWCoor@tsowtunlelum.org</p>
      </a>
      <p className="footer__text">250-390-3123</p>
      <a
        href="https://tsowtunlelum.org"
        target="_blank"
        rel="noreferrer"
        className="footer__link"
      >
        <p className="footer__text">tsowtunlelum.org</p>
      </a>
    </article>
  );
}

export default Footer;
