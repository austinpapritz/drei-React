import React, { Fragment, useRef, useState } from "react";
import * as Tone from "tone";
import { CircleSlider } from "react-circle-slider";
// import "./Lfo.css";

export default function Lfo({ type, sineTremolo }) {
  const status = useRef(false);
  const [freqAM, setFreqAM] = useState(0);
  const [statusLFO, setStatusLFO] = useState(false);

  const showStatus = () => {
    if (statusLFO) {
      return (
        <div className="containerStatus">
          ON
          <div id="dialOn"></div>
        </div>
      );
    } else {
      return (
        <div className="containerStatus">
          OFF
          <div id="dialOff"></div>
        </div>
      );
    }
  };

  const changeAM = (e) => {
    sineTremolo.frequency.value = e;
    setFreqAM(e);
  };

  const handleOnOff = () => {
    if (status.current === false) {
      sineTremolo.start();
      sineTremolo.wet.linearRampTo(1, 0.1, Tone.now());
      sineTremolo.depth.linearRampTo(1, 0.1, Tone.now());
      status.current = true;
      setStatusLFO(true);
    } else {
      sineTremolo.wet.linearRampTo(0, 0.1, Tone.now());
      sineTremolo.depth.linearRampTo(0, 0.1, Tone.now());
      sineTremolo.stop();
      status.current = false;
      setStatusLFO(false);
    }
  };

  const handleReset = () => {
    setFreqAM(0);
    sineTremolo.wet.linearRampTo(0, 0.1, Tone.now());
    sineTremolo.depth.linearRampTo(0, 0.1, Tone.now());
    sineTremolo.frequency.linearRampTo(0, 0.1, Tone.now());
    sineTremolo.stop();
    status.current = false;
    setStatusLFO(false);
  };

  return (
    <Fragment>
      <div
        className={`${type}-lfo`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <button onClick={handleOnOff}>
          {type} LFO {showStatus()}
        </button>
        <button
          className="reset"
          onClick={handleReset}
          style={{ height: "45px" }}
        >
          RESET
        </button>
      </div>
      <div className={`${type}-lfo-freq`}>
        <CircleSlider
          size={90}
          knobRadius={7}
          progressWidth={10}
          circleWidth={9}
          onChange={changeAM}
          value={freqAM}
          min={0}
          max={100}
          showTooltip={true}
        />
      </div>
      <div className={`${type}-amp-wave`}>{type} AMP LFO</div>
    </Fragment>
  );
}
