import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const icons = [faChevronLeft, faChevronRight];

function BlogSlider() {
	return (
		<div className="text-center my-8 text-black relative w-full h-60 sm:h-80 md:h-96">
			<img
				src="https://demo.tagdiv.com/newspaper_classic_pro/wp-content/uploads/2019/09/13-4-1920x1459.jpg"
				className="w-full h-full object-cover object-center"
			/>

			<div
				style={{
					background:
						'linear-gradient(rgb(164 164 164 / 35%) 0%, rgb(0 0 0 / 72%) 90%)'
				}}
				className="absolute w-full h-full top-0 left-0"
			></div>

			<ul className="absolute top-0 right-0 opacity-100 py-4 px-2 flex text-white">
				{icons.map((icon) => (
					<li
						key={uuidv4()}
						className="px-4 py-2 bg-black mx-1 cursor-pointer"
					>
						<FontAwesomeIcon icon={icon} />
					</li>
				))}
			</ul>
			<div className="absolute bottom-0 left-2/4 transform -translate-x-2/4 w-full p-4 md:p-8">
				<h3 className="text-3xl sm:text-4xl md:text-5xl text-right font-bold leading-8 text-gray-200 cursor-pointer">
					Making Family Out Of Friends
				</h3>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSlider);
