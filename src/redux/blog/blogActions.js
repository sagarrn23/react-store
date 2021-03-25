import blogAT from './blogActionTypes';

export const fetchBlogsRequest = () => {
	return {
		type: blogAT.FETCH_BLOGS_REQUEST
	};
};

export const fetchBlogsSuccess = (blogs) => {
	return {
		type: blogAT.FETCH_BLOGS_SUCCESS,
		payload: blogs
	};
};

export const fetchBlogsError = (error) => {
	return {
		type: blogAT.FETCH_BLOGS_ERROR,
		payload: error
	};
};

export const sliderBlogRequest = () => {
	return {
		type: blogAT.SLIDER_BLOG_REQUEST
	};
};

export const sliderBlogSuccess = (blog) => {
	return {
		type: blogAT.SLIDER_BLOG_SUCCESS,
		payload: blog
	};
};

export const sliderBlogError = (error) => {
	return {
		type: blogAT.SLIDER_BLOG_ERROR,
		payload: error
	};
};
