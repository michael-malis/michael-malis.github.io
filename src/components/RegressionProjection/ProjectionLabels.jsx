import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { VECTOR_COLORS } from './RegressionMath';

export function ProjectionLabels({ yPoint, yHatPoint, residual, x1, x2, isMobileView }) {
  const x1LabelPos = x1.clone().multiplyScalar(0.8).add(new THREE.Vector3(0.0, 0.32, 0.0));
  const x2LabelPos = x2.clone().multiplyScalar(0.8).add(new THREE.Vector3(0.0, 0.32, 0.0));

  const yLabelPos = yPoint.clone().multiplyScalar(0.5).add(new THREE.Vector3(0.15, 0.0, -0.12));
  const yHatLabelPos = yHatPoint.clone().multiplyScalar(0.75).add(new THREE.Vector3(-0.22, -0.1, 0.12));
  const epsilonLabelPos = yHatPoint.clone()
    .add(residual.clone().multiplyScalar(0.5))
    .add(new THREE.Vector3(0.15, 0.0, -0.10));

  const baseStyle = {
    fontFamily: "'Courier New', monospace",
    fontSize: isMobileView ? '10px' : '10px',
    fontWeight: '600',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    lineHeight: '1',
  };

  return (
    <group>
      <Html position={yLabelPos} center distanceFactor={10} zIndexRange={[50, 60]}>
        <span style={{ ...baseStyle, color: VECTOR_COLORS.y }}>y</span>
      </Html>

      <Html position={yHatLabelPos} center distanceFactor={10} zIndexRange={[50, 60]}>
        <span style={{ ...baseStyle, color: VECTOR_COLORS.yhat }}>ŷ</span>
      </Html>

      {residual.length() > 0.01 && (
        <Html position={epsilonLabelPos} center distanceFactor={10} zIndexRange={[50, 60]}>
          <span style={{ ...baseStyle, color: VECTOR_COLORS.epsilon }}>ε</span>
        </Html>
      )}

      {!isMobileView && (
        <Html position={x1LabelPos} center distanceFactor={10} zIndexRange={[50, 60]}>
          <span style={{ ...baseStyle, color: VECTOR_COLORS.x }}>x<sub>i</sub></span>
        </Html>
      )}

      {!isMobileView && (
        <Html position={x2LabelPos} center distanceFactor={10} zIndexRange={[50, 60]}>
          <span style={{ ...baseStyle, color: VECTOR_COLORS.x }}>x<sub>j</sub></span>
        </Html>
      )}
    </group>
  );
}
