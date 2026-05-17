import { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function VisibilityDriver({ containerRef }) {
  const { invalidate } = useThree();
  const frameRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const stopLoop = () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    };

    const startLoop = () => {
      const tick = () => {
        invalidate();
        frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startLoop(); else stopLoop(); },
      { threshold: 0 }
    );
    observer.observe(el);
    startLoop();

    return () => {
      observer.disconnect();
      stopLoop();
    };
  }, [containerRef, invalidate]);

  return null;
}
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { RegressionGeometry } from './RegressionGeometry';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { getPlaneNormal, projectPointOntoPlane, isValidPlane } from './RegressionMath';

const ORIGIN = new THREE.Vector3(0, 0, 0);
const RESUME_DELAY_MS = 2200;

function CameraController({ controlsRef, focusTarget, isMobileView, yHatPoint, yPoint, interactionRef, reducedMotion, active }) {
  const { camera } = useThree();
  const targetPos = useRef(null);
  const targetLook = useRef(null);

  const defaultPos = useMemo(
    () => isMobileView ? new THREE.Vector3(3.8, 3.2, 5.5) : new THREE.Vector3(4.5, 4.0, 6.5),
    [isMobileView]
  );

  // Bind OrbitControls start/end → pause/resume auto-rotation
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls || !interactionRef) return;
    const onStart = () => interactionRef.current.pause();
    const onEnd = () => interactionRef.current.scheduleResume();
    controls.addEventListener('start', onStart);
    controls.addEventListener('end', onEnd);
    return () => {
      controls.removeEventListener('start', onStart);
      controls.removeEventListener('end', onEnd);
    };
  }, [controlsRef, interactionRef]);

  useEffect(() => {
    if (!focusTarget) {
      targetPos.current = defaultPos.clone();
      targetLook.current = ORIGIN.clone();
      return;
    }

    const yMid = yPoint.clone().multiplyScalar(0.5);
    const yHatMid = yHatPoint.clone().multiplyScalar(0.5);
    const eMid = yHatPoint.clone().lerp(yPoint, 0.5);

    const presets = {
      y: {
        pos: isMobileView ? new THREE.Vector3(3.0, 3.0, 4.8) : new THREE.Vector3(3.5, 3.5, 5.5),
        look: yMid,
      },
      yhat: {
        pos: isMobileView ? new THREE.Vector3(3.3, 2.2, 4.5) : new THREE.Vector3(3.8, 2.5, 5.2),
        look: yHatMid,
      },
      residual: {
        pos: isMobileView ? new THREE.Vector3(2.8, 2.8, 4.5) : new THREE.Vector3(3.2, 3.2, 5.2),
        look: eMid,
      },
    };

    const preset = presets[focusTarget];
    if (preset) {
      targetPos.current = preset.pos;
      targetLook.current = preset.look;
    }
  }, [focusTarget, isMobileView, yHatPoint, yPoint, defaultPos]);

  useFrame(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    // Drive auto-rotation state every frame
    const shouldRotate =
      !reducedMotion &&
      !!interactionRef?.current?.autoRotate &&
      !targetPos.current;
    controls.autoRotate = shouldRotate;

    // Focus animation
    if (!targetPos.current || !targetLook.current) return;

    controls.enabled = false;
    camera.position.lerp(targetPos.current, 0.08);
    controls.target.lerp(targetLook.current, 0.08);
    controls.update();

    if (
      camera.position.distanceTo(targetPos.current) < 0.01 &&
      controls.target.distanceTo(targetLook.current) < 0.01
    ) {
      camera.position.copy(targetPos.current);
      controls.target.copy(targetLook.current);
      controls.update();
      if (active) controls.enabled = true;
      targetPos.current = null;
      targetLook.current = null;
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enablePan={false}
      enableZoom={active}
      enableRotate={active}
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.45}
      zoomSpeed={0.7}
      minDistance={2}
      maxDistance={10}
      autoRotateSpeed={1}
    />
  );
}

export function RegressionProjectionScene({ isMobileView, focusTarget, x1, x2, y, onDragX1, onDragX2, onDragY }) {
  const reducedMotion = usePrefersReducedMotion();
  const controlsRef = useRef();
  const containerRef = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    const handler = (e) => { if (e.key === 'Escape') setActive(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active]);

  // Shared interaction state — passed to both CameraController and RegressionGeometry
  const interactionRef = useRef({
    autoRotate: true,
    _timer: null,
    pause() {
      clearTimeout(this._timer);
      this.autoRotate = false;
    },
    scheduleResume() {
      clearTimeout(this._timer);
      this._timer = setTimeout(() => { this.autoRotate = true; }, RESUME_DELAY_MS);
    },
  });

  const yHatPoint = useMemo(() => {
    if (!isValidPlane(x1, x2)) return y.clone();
    const normal = getPlaneNormal(x1, x2);
    return projectPointOntoPlane(y.clone(), normal, ORIGIN);
  }, [x1, x2, y]);

  return (
    <div className="regression-canvas-wrap" ref={containerRef}>
      <Canvas
        frameloop="demand"
        style={{ pointerEvents: active ? 'auto' : 'none' }}
        camera={{
          position: isMobileView ? [3.8, 3.2, 5.5] : [4.5, 4.0, 6.5],
          fov: isMobileView ? 50 : 40,
        }}
        dpr={isMobileView ? [1, 1] : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={(state) => {
          state.gl.setClearColor(0x000000, 0);
        }}
        fallback={
          <div className="regression-webgl-fallback">
            <span>WebGL unavailable</span>
          </div>
        }
      >
        <VisibilityDriver containerRef={containerRef} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 5]} intensity={1.2} />
        <CameraController
          controlsRef={controlsRef}
          focusTarget={focusTarget}
          isMobileView={isMobileView}
          yHatPoint={yHatPoint}
          yPoint={y}
          interactionRef={interactionRef}
          reducedMotion={reducedMotion}
          active={active}
        />
        <RegressionGeometry
          isMobileView={isMobileView}
          reducedMotion={reducedMotion}
          x1={x1}
          x2={x2}
          y={y}
          onDragX1={onDragX1}
          onDragX2={onDragX2}
          onDragY={onDragY}
          controlsRef={controlsRef}
          interactionRef={interactionRef}
        />
      </Canvas>
      {!active && (
        <div
          className="regression-interact-hint"
          onClick={() => setActive(true)}
          aria-label="Click to interact with 3D demo"
        >
          <span>Click to interact</span>
        </div>
      )}
    </div>
  );
}
