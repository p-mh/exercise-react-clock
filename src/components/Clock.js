import React, { Component } from 'react';
import moment from 'moment';

import {
  ClockBlock,
  ClockDial,
  SecondsNeedle,
  MinutesNeedle,
  HourNeedle,
} from './clockStyle';

export default class Clock extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  componentDidMount() {
    clearInterval(this.getHour);
    this.getHour = setInterval(() => {
      this.setState({
        hours: Number(moment().format('HH')),
        minutes: Number(moment().format('mm')),
        seconds: Number(moment().format('ss')),
      });
    }, 100);
  }
  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div>
        <ClockBlock>
          <ClockDial />
          <SecondsNeedle value={seconds * (360 / 60)} />
          <MinutesNeedle value={minutes * (360 / 60)} />
          <HourNeedle value={hours * (360 / 12) + minutes * (30 / 60)} />
        </ClockBlock>
      </div>
    );
  }
}
