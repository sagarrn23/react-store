import blogAT from './blogActionTypes';

const initialState = {
	totalBlog: [],
	currentBlog: [],
	singleBlog: {},
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
				loading: true
			};
		case blogAT.SLIDER_BLOG_SUCCESS:
			return {
				...state,
				loading: false,
				currentBlog: action.payload
			};
		case blogAT.SLIDER_BLOG_ERROR:
			return {
				...state,
				error: action.error
			};

		case blogAT.SINGLE_BLOG_REQUEST:
			return {
				...state,
				loading: true
			};
		case blogAT.SINGLE_BLOG_SUCCESS:
			return {
				...state,
				loading: false,
				singleBlog: action.payload
			};
		case blogAT.SINGLE_BLOG_ERROR:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default blogReducer;
