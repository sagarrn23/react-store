import axios from '../axiosDefault';
import {
	fetchBlogsError,
	fetchBlogsRequest,
	fetchBlogsSuccess,
	sliderBlogError,
	sliderBlogRequest,
	sliderBlogSuccess,
	singleBlogError,
	singleBlogRequest,
	singleBlogSuccess
} from '../../redux/blog/blogActions';

export const fetchBlogs = (categories, author) => {
	const args = {
		categories: categories,
		author: author
	};
	return (dispatch) => {
		dispatch(fetchBlogsRequest());
		axios
			.get('/posts', {
				params: {
					...args
				}
			})
			.then((res) => {
				console.log(res);
				dispatch(fetchBlogsSuccess(res.data));
			})
			.catch((err) => {
				dispatch(fetchBlogsError(err));
			});
	};
};

export const fetchLatestBlog = (id) => {
	return (dispatch) => {
		dispatch(sliderBlogRequest());
		axios
			.get(`/posts/`, {
				params: {
					per_page: 1,
					orderby: 'date',
					page: id
				}
			})
			.then((res) => {
				const data = res.data;
				data[0].total_post = res.headers['x-wp-total'];
				dispatch(sliderBlogSuccess(data));
			})
			.catch((err) => {
				dispatch(sliderBlogError(err));
			});
	};
};

export const fetchSingleBlog = (id) => {
	return (dispatch) => {
		dispatch(singleBlogRequest());
		axios
			.get('/posts/' + id)
			.then((res) => {
				dispatch(singleBlogSuccess(res.data));
			})
			.catch((err) => {
				dispatch(singleBlogError(err));
			});
	};
};
