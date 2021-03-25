import axios from '../axiosDefault';
import {
	fetchBlogsError,
	fetchBlogsRequest,
	fetchBlogsSuccess,
	sliderBlogError,
	sliderBlogRequest,
	sliderBlogSuccess
} from '../../redux/blog/blogActions';

export const fetchBlogs = () => {
	return (dispatch) => {
		dispatch(fetchBlogsRequest());
		axios
			.get('/posts')
			.then((res) => {
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
				dispatch(sliderBlogSuccess(res.data));
			})
			.catch((err) => {
				dispatch(sliderBlogError(err));
			});
	};
};
