import React from 'react';

import Marquee from 'react-fast-marquee';

import './TextInfiniteMotion.scss';

const TextInfiniteMotion = () => {
	return (
		<div className='marquee__container'>
			<Marquee className='marquee__line' gradient={false} speed='100'>
				<p>
					Design <span className='circle circle__background--red' />
					Creates <span className='circle circle__border--red' />
					<span className='circle circle__background--red' />
					Culture
					<span className='circle circle__background--orange' />
				</p>
				<p>
					Design <span className='circle circle__background--red' />
					Creates <span className='circle circle__border--red' />
					<span className='circle circle__background--red' />
					Culture
					<span className='circle circle__background--orange' />
				</p>
				<p>
					Design <span className='circle circle__background--red' />
					Creates <span className='circle circle__border--red' />
					<span className='circle circle__background--red' />
					Culture
					<span className='circle circle__background--orange' />
				</p>
			</Marquee>
			<Marquee
				className='marquee__line'
				gradient={false}
				speed='100'
				direction='right'>
				<p>GeT Your --- Business | </p>
				<p>GeT Your --- Business | </p>
				<p>GeT Your --- Business | </p>
				<p>GeT Your --- Business | </p>
			</Marquee>
			<Marquee className='marquee__line' gradient={false} speed='100'>
				<p>
					To The
					<span className='circle circle__background--blue' />
					<span className='circle circle__background--orange' />
					<span className='circle circle__background--purple' />
					Next Level
					<span className='circle circle__border--black' />
					<span className='circle circle__border--black' />
				</p>
				<p>
					To The
					<span className='circle circle__background--blue' />
					<span className='circle circle__background--orange' />
					<span className='circle circle__background--purple' />
					Next Level
					<span className='circle circle__border--black' />
					<span className='circle circle__border--black' />
				</p>
				<p>
					To The
					<span className='circle circle__background--blue' />
					<span className='circle circle__background--orange' />
					<span className='circle circle__background--purple' />
					Next Level
					<span className='circle circle__border--black' />
					<span className='circle circle__border--black' />
				</p>
				<p>
					To The
					<span className='circle circle__background--blue' />
					<span className='circle circle__background--orange' />
					<span className='circle circle__background--purple' />
					Next Level
					<span className='circle circle__border--black' />
					<span className='circle circle__border--black' />
				</p>
			</Marquee>
		</div>
	);
};

export default TextInfiniteMotion;
