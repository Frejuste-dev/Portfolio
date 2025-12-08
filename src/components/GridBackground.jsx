import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GridBackground = () => {
    const gridRef = useRef();

    useFrame((state) => {
        if (gridRef.current) {
            // Move grid towards camera to create infinite scrolling effect
            gridRef.current.position.z = (state.clock.getElapsedTime() * 2) % 2;
        }
    });

    return (
        <group rotation={[Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
            <gridHelper
                ref={gridRef}
                args={[100, 100, 0x00f3ff, 0xbc13fe]}
                position={[0, 0, 0]}
            />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -0.1]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="#042f2e" transparent opacity={0.8} />
            </mesh>
        </group>
    );
};

export default GridBackground;
