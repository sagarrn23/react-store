import { createStore, applyMiddleware } from 'redux';
import blogReducer from './blog/blogReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	blogReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
