import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchLatestBlog } from '../../../api/blog/fetchBlogs';

const icons = [faChevronLeft, faChevronRight];

function BlogSlider({ blog, blogAvailable, fetchBlog }) {
	const [sliderBlogNum, setSliderBlogNum] = useState(1);

	useEffect(() => {
		// console.log(sliderBlogNum);
		fetchBlog(sliderBlogNum);
	}, [sliderBlogNum]);

	const setSliderBlogNumHandler = (index) => {
		if (index === 0) {
			setSliderBlogNum((prev) => prev - 1);
			// fetchBlog(sliderBlogNum);
		} else {
			console.log(blogAvailable);
			// console.log(sliderBlogNum);
			if (blogAvailable) {
				setSliderBlogNum((prev) => prev + 1);
				// fetchBlog(sliderBlogNum);
			}
		}
		console.log(sliderBlogNum);
	};

	const navigationArrowHandler = (index) => {
		if (index === 0 && sliderBlogNum === 1) {
			return 'cursor-not-allowed bg-red-900';
		} else {
			return '';
		}
	};

	return blog.length ? (
		<div className="text-center my-8 text-black relative w-full h-60 sm:h-80 md:h-96">
			<img
				src={blog[0].uagb_featured_image_src.full[0]}
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
				{icons.map((icon, index) => (
					<li
						key={uuidv4()}
						className={`px-4 py-2 bg-black mx-1 cursor-pointer ${navigationArrowHandler(
							index
						)}`}
						onClick={() => setSliderBlogNumHandler(index)}
					>
						<FontAwesomeIcon icon={icon} />
					</li>
				))}
			</ul>
			<div
				className="absolute bottom-0 left-2/4 transform -translate-x-2/4 w-full p-4 md:p-8"
				title={blog[0].title.rendered}
			>
				<h3 className="text-3xl sm:text-4xl md:text-5xl text-right font-bold leading-8 text-gray-200 cursor-pointer">
					{blog[0].title.rendered.length > 35
						? blog[0].title.rendered.slice(0, 35) + '...'
						: blog[0].title.rendered}
				</h3>
			</div>
		</div>
	) : null;
}

const mapStateToProps = (state) => {
	console.log(state.currentBlog);
	return {
		blog: state.currentBlog,
		blogAvailable: state.slideBlogAvailable
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBlog: (sliderBlogNum) => dispatch(fetchLatestBlog(sliderBlogNum))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSlider);
