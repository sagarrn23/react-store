import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSingleBlog } from '../../../api/blog/fetchBlogs';
import SingleBlogContent from '../../layout/SingleBlogContent/SingleBlogContent';

export const SingleBlog = ({ singleBlog, fetchBlog, location }) => {
	useEffect(() => {
		const storedBlogId = localStorage.getItem('blogId');
		localStorage.setItem('blogId', location.id || storedBlogId);
		const id = location.id || localStorage.getItem('blogId');
		fetchBlog(id);
		return () => {
			localStorage.removeItem('blogId');
		};
	}, []);

	return (
		<div className="container my-4 text-black dark:text-white">
			<SingleBlogContent content={singleBlog} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		singleBlog: state.singleBlog
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBlog: (id) => dispatch(fetchSingleBlog(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
