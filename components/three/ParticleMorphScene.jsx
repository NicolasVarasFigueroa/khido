"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const shapeOrder = ["sphere", "cube", "chart", "cluster", "dna", "code"];

function seeded(index) {
  const x = Math.sin(index * 999.13) * 10000;
  return x - Math.floor(x);
}

function makeShapes(count) {
  const shapes = {};

  const arrays = shapeOrder.reduce((acc, name) => {
    acc[name] = new Float32Array(count * 3);
    return acc;
  }, {});

  for (let i = 0; i < count; i += 1) {
    const u = seeded(i + 1);
    const v = seeded(i + 11);
    const w = seeded(i + 29);
    const q = seeded(i + 41);
    const stride = i * 3;

    const theta = u * Math.PI * 2;
    const phi = Math.acos(2 * v - 1);

    // SPHERE
    const radius = 2.05 + seeded(i + 77) * 0.2;
    arrays.sphere[stride] = radius * Math.sin(phi) * Math.cos(theta);
    arrays.sphere[stride + 1] = radius * Math.sin(phi) * Math.sin(theta);
    arrays.sphere[stride + 2] = radius * Math.cos(phi);

    // CUBE
    const face = Math.floor(u * 6);
    const a = (v - 0.5) * 3.15;
    const b = (w - 0.5) * 3.15;
    const side = 1.62;
    const noise = 0.08;

    const cubePoint = [
      [side + (u - 0.5) * noise, a, b],
      [-side + (u - 0.5) * noise, a, b],
      [a, side + (v - 0.5) * noise, b],
      [a, -side + (v - 0.5) * noise, b],
      [a, b, side + (w - 0.5) * noise],
      [a, b, -side + (w - 0.5) * noise],
    ][face];

    arrays.cube.set(cubePoint, stride);

    // CHART / BUSINESS INTELLIGENCE
    const section = i % 6;

    function boxPoint(centerX, centerY, width, height, depth) {
      const boxFace = Math.floor(u * 6);
      const x = centerX + (v - 0.5) * width;
      const y = centerY + (w - 0.5) * height;
      const z = (q - 0.5) * depth;

      if (boxFace === 0) return [centerX - width / 2, y, z];
      if (boxFace === 1) return [centerX + width / 2, y, z];
      if (boxFace === 2) return [x, centerY - height / 2, z];
      if (boxFace === 3) return [x, centerY + height / 2, z];
      if (boxFace === 4) return [x, y, -depth / 2];
      return [x, y, depth / 2];
    }

    if (section === 0) {
      arrays.chart.set(boxPoint(-1.18, -0.78, 0.5, 0.85, 0.7), stride);
    }

    if (section === 1) {
      arrays.chart.set(boxPoint(-0.2, -0.48, 0.5, 1.45, 0.7), stride);
    }

    if (section === 2) {
      arrays.chart.set(boxPoint(0.88, -0.08, 0.54, 2.25, 0.7), stride);
    }

    if (section === 3 || section === 4) {
      const t = u;

      const curveX = -1.55 + t * 2.65;
      const curveY = -0.12 + Math.pow(t, 1.45) * 1.95;

      const dx = 2.65;
      const dy = 1.95 * 1.45 * Math.pow(Math.max(t, 0.02), 0.45);
      const length = Math.sqrt(dx * dx + dy * dy);

      const normalX = -dy / length;
      const normalY = dx / length;

      const thickness = section === 3 ? 0.12 : 0.18;
      const offset = (v - 0.5) * thickness;

      arrays.chart[stride] = curveX + normalX * offset;
      arrays.chart[stride + 1] = curveY + normalY * offset;
      arrays.chart[stride + 2] = (w - 0.5) * 0.48;
    }

    if (section === 5) {
      const tipX = 1.35;
      const tipY = 1.9;

      const backX = 0.82;
      const backY = 1.42;

      const t = u;
      const spread = (1 - t) * 0.95;
      const centerX = backX + t * (tipX - backX);
      const centerY = backY + t * (tipY - backY);

      arrays.chart[stride] = centerX + (q - 0.5) * 0.16;
      arrays.chart[stride + 1] = centerY + (v - 0.5) * spread;
      arrays.chart[stride + 2] = (w - 0.5) * 0.5;
    }

    // CLUSTER
    const clusterId = i % 6;
    const clusterAngle = (clusterId / 6) * Math.PI * 2;
    const cx = Math.cos(clusterAngle) * 1.45;
    const cy = Math.sin(clusterAngle) * 1.05;

    arrays.cluster[stride] = cx + (u - 0.5) * 0.85;
    arrays.cluster[stride + 1] = cy + (v - 0.5) * 0.85;
    arrays.cluster[stride + 2] = (w - 0.5) * 1.75;

    // DNA
    const dnaT = (i / count) * Math.PI * 11;
    const lane = i % 2 === 0 ? 0 : Math.PI;

    arrays.dna[stride] = Math.cos(dnaT + lane) * 0.9;
    arrays.dna[stride + 1] = (i / count - 0.5) * 4.35;
    arrays.dna[stride + 2] = Math.sin(dnaT + lane) * 0.9;

    // CODE / DESARROLLO WEB
    const codeSection = i % 3;

    if (codeSection === 0) {
      const t = u;
      const sideCode = v > 0.5 ? 1 : -1;

      arrays.code[stride] = -1.35 + t * 0.85;
      arrays.code[stride + 1] =
        sideCode * (0.95 - t * 0.95) + (w - 0.5) * 0.18;
      arrays.code[stride + 2] = (q - 0.5) * 0.5;
    }

    if (codeSection === 1) {
      const t = u;

      arrays.code[stride] = -0.15 + t * 0.3 + (v - 0.5) * 0.12;
      arrays.code[stride + 1] = -1.05 + t * 2.1 + (w - 0.5) * 0.2;
      arrays.code[stride + 2] = (q - 0.5) * 0.5;
    }

    if (codeSection === 2) {
      const t = u;
      const sideCode = v > 0.5 ? 1 : -1;

      arrays.code[stride] = 1.35 - t * 0.85;
      arrays.code[stride + 1] =
        sideCode * (0.95 - t * 0.95) + (w - 0.5) * 0.18;
      arrays.code[stride + 2] = (q - 0.5) * 0.5;
    }
  }

  shapeOrder.forEach((name) => {
    shapes[name] = arrays[name];
  });

  return shapes;
}

function MorphingParticles({
  shape = "sphere",
  compact = false,
  interactive = true,
  scale = 1,
  mouseActiveRef,
}) {
  const count = compact ? 900 : 2100;
  const pointsRef = useRef(null);
  const previousShapeRef = useRef(shape);

  const shapes = useMemo(() => makeShapes(count), [count]);
  const initial = useMemo(() => new Float32Array(shapes.sphere), [shapes]);

  useFrame((state) => {
    const points = pointsRef.current;
    if (!points) return;

    const target = shapes[shape] || shapes.sphere;
    const positions = points.geometry.attributes.position.array;

    const isMouseActive = mouseActiveRef.current;
    const isMorphing = shape !== previousShapeRef.current;

    const mouseX = state.pointer.x * 2.65;
    const mouseY = state.pointer.y * 2.05;
    const time = state.clock.elapsedTime;

    let totalDistance = 0;

    for (let i = 0; i < positions.length; i += 3) {
      let nextX = target[i];
      let nextY = target[i + 1];
      let nextZ = target[i + 2];

      if (interactive && isMouseActive) {
        const dx = nextX - mouseX;
        const dy = nextY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const radius = compact ? 0.65 : 0.8;

        if (distance < radius) {
          const force = Math.pow((radius - distance) / radius, 2.8);
          const angle = Math.atan2(dy, dx);

          nextX += Math.cos(angle) * force * 0.38;
          nextY += Math.sin(angle) * force * 0.38;
          nextZ += force * 0.22;
        }
      }

      const waveX = Math.sin(time * 2.2 + i * 0.019) * 0.045;
      const waveY = Math.cos(time * 1.9 + i * 0.017) * 0.045;
      const waveZ = Math.sin(time * 1.6 + i * 0.021) * 0.038;

      nextX += waveX;
      nextY += waveY;
      nextZ += waveZ;

      const speed = isMorphing ? 0.014 : isMouseActive ? 0.045 : 0.055;

      positions[i] += (nextX - positions[i]) * speed;
      positions[i + 1] += (nextY - positions[i + 1]) * speed;
      positions[i + 2] += (nextZ - positions[i + 2]) * speed;

      totalDistance +=
        Math.abs(positions[i] - target[i]) +
        Math.abs(positions[i + 1] - target[i + 1]) +
        Math.abs(positions[i + 2] - target[i + 2]);
    }

    points.geometry.attributes.position.needsUpdate = true;

    if (isMorphing && totalDistance / positions.length < 0.035) {
      previousShapeRef.current = shape;
    }

    if (shape === "cube") {
      points.rotation.y += 0.0022;
      points.rotation.x = Math.sin(time * 0.25) * 0.08;
      points.rotation.z = 0;
    } else if (shape === "chart") {
      points.rotation.x = 0.02;
      points.rotation.y = -0.12;
      points.rotation.z = 0;
    } else {
      points.rotation.x = 0;
      points.rotation.y = 0;
      points.rotation.z = 0;
    }
  });

  return (
    <group scale={scale}>
      <Points ref={pointsRef} positions={initial} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          opacity={0.95}
          size={compact ? 0.052 : 0.043}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function ParticleMorphScene({
  shape = "sphere",
  compact = false,
  interactive = true,
  scale = 1,
  className = "",
}) {
  const mouseActiveRef = useRef(false);

  return (
    <div className={`relative overflow-visible ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, compact ? 5.8 : 6.4], fov: 52 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
        onPointerEnter={() => {
          mouseActiveRef.current = true;
        }}
        onPointerLeave={() => {
          mouseActiveRef.current = false;
        }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[3, 2, 4]} intensity={1.5} color="#00BFCB" />

        <MorphingParticles
          shape={shape}
          compact={compact}
          interactive={interactive}
          scale={scale}
          mouseActiveRef={mouseActiveRef}
        />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 orb-shadow" />
    </div>
  );
}