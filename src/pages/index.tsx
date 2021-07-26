import React from 'react';
import { TopContainer, BottomContainer } from './styles';

export default function Home() {
  return (
    <>
      <TopContainer>
        <span>
          Measuring <br /> Everything
        </span>
        <img src="/images/measure_tape_1_medium.png" alt="measure tape" />
        <span> </span>
      </TopContainer>
      <BottomContainer>
        <span>
          We are Leader <br /> in Measure Tapes
        </span>
        <span>
          There are 5x the <br /> circumference of planet <br /> earth in metric
          tapes.
        </span>
        <img
          src="/images/measure_tape_2_medium-removebg-preview.png"
          alt="measure tape 2"
        />
      </BottomContainer>
    </>
  );
}
