import { OrbitControls, TransformControls, Html } from "@react-three/drei";
import { sine, sineLevel, sineLfo, logData } from "./Oscillator.jsx";
import Control from "./Control.jsx";
import Lfo from "./Lfo.jsx";
export default function Experience() {
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

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={15}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
        <Html>
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
