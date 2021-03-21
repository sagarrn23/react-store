import blogAT from './blogActionTypes';

export const fetchBlogsRequest = () => {
	return {
		type: blogAT.FETCH_BLOGS_REQUEST
	};
};

export const fetchBlogsSuccess = (blogs) => {
	// console.log(blogs);
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

export const nextBlogRequest = () => {
	return {
		type: blogAT.NEXT_BLOG_REQUEST
	};
};

export const nextBlogSuccess = (blog) => {
	return {
		type: blogAT.NEXT_BLOG_SUCCESS,
		payload: blog
	};
};

export const nextBlogError = (error) => {
	return {
		type: blogAT.NEXT_BLOG_ERROR,
		payload: error
	};
};

export const previousBlogRequest = () => {
	return {
		type: blogAT.PREVIOUS_BLOG_REQUEST
	};
};

export const previousBlogSuccess = (blog) => {
	return {
		type: blogAT.PREVIOUS_BLOG_SUCCESS,
		payload: blog
	};
};

export const previousBlogError = (error) => {
	return {
		type: blogAT.PREVIOUS_BLOG_ERROR,
		payload: error
	};
};
