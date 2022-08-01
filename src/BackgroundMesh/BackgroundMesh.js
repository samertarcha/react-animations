import React from 'react';

import './BackgroundMesh.scss';

import Mesh1 from '../img/Vector 1.svg';
import Mesh2 from '../img/Vector 2.svg';
import Mesh3 from '../img/Vector 3.svg';

const BackgroundMesh = () => {
	return (
		<section className='mesh-background'>
			<img
				className='mesh-background__item mesh-background__item--1'
				src={Mesh1}
				alt='Mesh1'
			/>
			<img
				className='mesh-background__item mesh-background__item--2'
				src={Mesh2}
				alt='Mesh2'
			/>
			<img
				className='mesh-background__item mesh-background__item--3'
				src={Mesh3}
				alt='Mesh3'
			/>
		</section>
	);
};

export default BackgroundMesh;
