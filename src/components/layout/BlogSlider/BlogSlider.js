import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchLatestBlog } from '../../../api/blog/fetchBlogs';

function BlogSlider({ blog, fetchBlog }) {
	const [sliderBlogNum, setSliderBlogNum] = useState(1);

	useEffect(() => {
		fetchBlog(sliderBlogNum);
	}, [sliderBlogNum]);

	const setSliderBlogPrevHandler = () => {
		setSliderBlogNum((prev) => prev - 1);
	};

	const setSliderBlogNextHandler = () => {
		setSliderBlogNum((prev) => prev + 1);
	};

	return blog.length ? (
		<div className="text-center my-8 text-black relative w-full h-60 sm:h-80 md:h-96">
			{/* {console.log(blog.length)} */}
			<img
				src={blog[0].uagb_featured_image_src.full[0]}
				className="w-full h-full object-cover object-center"
				alt={blog[0].title.rendered}
			/>

			<div
				style={{
					background:
						'linear-gradient(rgb(164 164 164 / 35%) 0%, rgb(0 0 0 / 72%) 90%)'
				}}
				className="absolute w-full h-full top-0 left-0"
			></div>

			<ul className="absolute top-0 right-0 opacity-100 py-4 px-2 flex text-white">
				{sliderBlogNum > 1 ? (
					<li
						className="px-4 py-2 bg-black mx-1 cursor-pointer"
						onClick={() => setSliderBlogPrevHandler()}
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</li>
				) : null}
				{+blog[0].total_post !== sliderBlogNum ? (
					<li
						className="px-4 py-2 bg-black mx-1 cursor-pointer"
						onClick={() => setSliderBlogNextHandler()}
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</li>
				) : null}
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
	return {
		blog: state.currentBlog
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBlog: (sliderBlogNum) => dispatch(fetchLatestBlog(sliderBlogNum))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSlider);
