import React from 'react';
import App from './components/App';
import Blog from './components/pages/Blog/Blog';
import Shop from './components/pages/Shop/Shop';
import { Route, Switch } from 'react-router-dom';
import SingleBlog from './components/pages/SingleBlog/SingleBlog';

const ROUTES = [
	{
		path: '/',
		exact: true,
		component: App
	},
	{
		path: '/blog',
		exact: true,
		component: Blog
	},
	{
		path: '/shop',
		exact: true,
		component: Shop
	},
	{
		path: `/blog/:post`,
		exact: true,
		component: SingleBlog
	}
];

export default ROUTES;

function RouteWithSubRoutes(route, index) {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			component={route.component}
			key={index}
		/>
	);
}

export function RenderRoutes(routes) {
	return (
		<Switch>
			{routes.map((route, i) => {
				return RouteWithSubRoutes(route, i);
			})}
		</Switch>
	);
}
