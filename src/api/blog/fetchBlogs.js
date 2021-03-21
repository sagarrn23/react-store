import axios from '../axiosDefault';
import {
	fetchBlogsError,
	fetchBlogsRequest,
	fetchBlogsSuccess
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
		dispatch(fetchBlogsRequest());
		axios
			.get(`/posts/${id}`)
			.then((res) => {
				dispatch(fetchBlogsSuccess(res.data));
			})
			.catch((err) => {
				dispatch(fetchBlogsError(err));
			});
	};
};
