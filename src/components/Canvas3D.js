import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import styled from 'styled-components';

function Box({ props }) {
	const mesh = useRef();
	const [hovered, setHovered] = useState();
	const [active, setActive] = useState();

	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
			onClick={e => setActive(!active)}
			onPointerOver={e => setHovered(true)}
			onPointerOut={e => setHovered(false)}
		>
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<meshStandardMaterial
				attach='material'
				color={hovered ? 'hotpink' : 'orange'}
			/>
		</mesh>
	);
}

export default function Canvas3D() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
		</Canvas>
	);
}
