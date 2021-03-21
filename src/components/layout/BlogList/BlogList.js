import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BlogCard from './BlogCard/BlogCard';

function BlogList({ blogs }) {
	return (
		<ul className="text-black grid grid-cols-1 md:grid-cols-2">
			{blogs?.length
				? blogs.map((blog) => {
						return <BlogCard blogData={blog} key={uuidv4()} />;
				  })
				: null}
		</ul>
	);
}

export default BlogList;
