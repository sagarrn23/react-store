import blogAT from './blogActionTypes';

const initialState = {
	totalBlog: [],
	currentBlog: [],
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

		case blogAT.NEXT_BLOG_REQUEST:
			return [];
		case blogAT.NEXT_BLOG_SUCCESS:
			return [];
		case blogAT.NEXT_BLOG_ERROR:
			return [];

		case blogAT.PREVIOUS_BLOG_REQUEST:
			return [];
		case blogAT.PREVIOUS_BLOG_SUCCESS:
			return [];
		case blogAT.PREVIOUS_BLOG_ERROR:
			return [];
		default:
			return state;
	}
};

export default blogReducer;
