import "./CountDownTimer.scss";
import Countdown from "react-countdown";
import { Component } from "react";
import Completionist from "../Completionist/Completionist";

class CountDownTimer extends Component {
  render() {
    return (
        <Countdown date={Date.now() + 7788496000}>
          <Completionist />
        </Countdown>
    );
  }
}

export default CountDownTimer;
