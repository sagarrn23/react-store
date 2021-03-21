import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../../api/blog/fetchBlogs';
import BlogList from '../../layout/BlogList/BlogList';
import BlogSlider from '../../layout/BlogSlider/BlogSlider';

function Blog({ blogs, fetchBlogs }) {
	useEffect(() => {
		fetchBlogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container my-4">
			<BlogSlider />
			<BlogList blogs={blogs} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		blogs: state.totalBlog
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBlogs: () => dispatch(fetchBlogs())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
