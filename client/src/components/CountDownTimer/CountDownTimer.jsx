import "./CountDownTimer.scss";
import Countdown from "react-countdown";
import { Component } from "react";
import Completionist from "../Completionist/Completionist";

class CountDownTimer extends Component {
    //https://www.npmjs.com/package/react-countdown
  render() {
    return (
        <Countdown date={Date.now() + 7466408000}>
          <Completionist />
        </Countdown>
    );
  }
}

export default CountDownTimer;
