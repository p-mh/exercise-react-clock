import styled from 'styled-components';

export const ClockBlock = styled.div`
  position: relative;
  margin: 100px auto;
  width: 0px;
`;

export const ClockDial = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  border: #000 2px solid;
  position: absolute;
  margin-left: -125px;
  margin-top: -25px;
`;

export const SecondsNeedle = styled.div`
  position: absolute;
  width: 1px;
  height: 100px;
  transform-origin: bottom center;
  background-color: red;
  transform: rotate(${({ value }) => value}deg);
`;

export const MinutesNeedle = styled.div`
  position: absolute;
  width: 1px;
  height: 100px;
  transform-origin: bottom center;
  background-color: #000;
  transform: rotate(${({ value }) => value}deg);
`;

export const HourNeedle = styled.div`
  position: absolute;
  top: 30px;
  width: 1px;
  height: 70px;
  transform-origin: bottom center;
  background-color: #000;
  transform: rotate(${({ value }) => value}deg);
`;
