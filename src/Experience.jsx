import { OrbitControls, TransformControls, Html } from "@react-three/drei";
import { sine, sineLevel, sineLfo, logData, useWave } from "./Oscillator.jsx";
import Control from "./Control.jsx";
import Lfo from "./Lfo.jsx";
import * as Tone from "tone";

export default function Experience() {
  // let simpleSynth = new Tone.MonoSynth({
  //   volume: -1,
  //   oscillator: { type: "sine", frequency: 300 },
  // });
  // simpleSynth.triggerAttack();
  // simpleSynth.toDestination();
  // let waveform = new Tone.Waveform();
  // Tone.Destination.connect(waveform);
  // const value = waveform.getValue(0);
  // console.log("value", value);

  const { waveformData } = useWave();
  console.log("waveformData", waveformData);
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        position-y={-1}
        position-x={5}
        position-z={-4}
        rotation-x={-Math.PI * 0.5}
        scale={15}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
        <Html>
          <p>{waveformData}</p>
          <div className="oscObject">
            <Control synthLevel={sineLevel} synth={sine} />
            <Lfo className="lfo" sineTremolo={sineLfo} />
            <button onClick={() => logData()}>Log to Console</button>
          </div>
        </Html>
      </mesh>
    </>
  );
}
