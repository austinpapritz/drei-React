import { useEffect, useState } from "react";
import * as Tone from "tone";

export const sineLevel = new Tone.Volume(-30).toDestination();
let waveform = new Tone.Waveform();
Tone.Destination.connect(waveform);

export function useWave() {
  const [waveformData, setWaveFormData] = useState([]);
  useEffect(() => {
    if (waveform) {
      const value = waveform.getValue(0);
      setWaveFormData(value);
      console.log("waveformData", waveformData);
    } else {
      return;
    }
  }, []);
  return waveformData;
}

export function logData() {
  const value = waveform.getValue(0);
  return value;
  //   console.log("value", value);
}

export const sineLfo = new Tone.Tremolo({
  frequency: 0,
  depth: 1,
  spread: 0,
}).connect(sineLevel);

export const sine = new Tone.MonoSynth({
  volume: -8,
  oscillator: {
    type: "sine",
    frequency: 150,
  },
  envelope: {
    attack: 0.6,
    decay: 0.0,
    sustain: 1,
    release: 0.1,
  },
}).connect(sineLfo);
