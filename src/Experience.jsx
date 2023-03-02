import { OrbitControls, TransformControls } from "@react-three/drei";

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
      <TransformControls position-x={2} mode="scale">
        <mesh scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </TransformControls>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={15}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
