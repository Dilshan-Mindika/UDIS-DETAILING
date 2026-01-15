"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function NanoField(props: any) {
    const ref = useRef<any>(null);

    // Generate particles manually
    const [sphere] = useState(() => {
        const count = 4000; // Increased density for "Field" look
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Cylinder/Field shape instead of just sphere
            const r = 3 * Math.sqrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;

            const x = r * Math.cos(theta);
            const y = (Math.random() - 0.5) * 4; // Height spread
            const z = r * Math.sin(theta);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y -= delta / 30;
            // Wave effect
            const time = state.clock.elapsedTime;
            ref.current.position.y = Math.sin(time * 0.2) * 0.1;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#2563EB" // Primary Blue
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function ConnectionLines() {
    // A separate layer for "grid" lines or structure can be added here
    return null; // Keeping it simple for performance first
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                <NanoField />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
}
