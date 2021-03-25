import blogAT from './blogActionTypes';

const initialState = {
	totalBlog: [],
	currentBlog: [],
	slideBlogAvailable: true,
	loading: true,
	error: ''
};

const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case blogAT.FETCH_BLOGS_REQUEST:
			return {
				...state,
				loading: true
			};
		case blogAT.FETCH_BLOGS_SUCCESS:
			return {
				...state,
				loading: false,
				totalBlog: action.payload
			};
		case blogAT.FETCH_BLOGS_ERROR:
			return {
				...state,
				totalBlog: [],
				loading: false,
				error: action.payload
			};

		case blogAT.SLIDER_BLOG_REQUEST:
			return {
				...state,
				slideBlogAvailable: true,
				loading: true
			};
		case blogAT.SLIDER_BLOG_SUCCESS:
			return {
				...state,
				loading: false,
				slideBlogAvailable: true,
				currentBlog: action.payload
			};
		case blogAT.SLIDER_BLOG_ERROR:
			return {
				...state,
				slideBlogAvailable: false
			};
		default:
			return state;
	}
};

export default blogReducer;
