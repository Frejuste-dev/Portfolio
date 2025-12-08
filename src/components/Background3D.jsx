import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const GeometricShape = ({ position, color, geometry, speed = 1 }) => {
    const mesh = useRef();

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2 * speed;
            mesh.current.rotation.y += delta * 0.3 * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={mesh} position={position}>
                {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
                {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
                {geometry === 'torus' && <torusGeometry args={[0.8, 0.2, 16, 32]} />}
                <meshStandardMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={0.3}
                    roughness={0}
                    metalness={1}
                />
            </mesh>
        </Float>
    );
};

const Background3D = () => {
    return (
        <group>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <GeometricShape position={[-4, 2, -5]} color="#00f3ff" geometry="icosahedron" speed={0.5} />
            <GeometricShape position={[4, -2, -5]} color="#bc13fe" geometry="octahedron" speed={0.7} />
            <GeometricShape position={[0, 0, -8]} color="#0066ff" geometry="torus" speed={0.3} />

            <fog attach="fog" args={['#042f2e', 5, 20]} />
        </group>
    );
};

export default Background3D;
