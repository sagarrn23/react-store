import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function BlogCard({ blogData, location }) {
	const convertDate = (date) => {
		const dateString = new Date(date);
		const month = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		return `${
			month[dateString.getMonth()]
		} ${dateString.getDay()}, ${dateString.getFullYear()}`;
	};

	return (
		<li className="flex flex-col">
			{/* {console.log(blogData)} */}
			<div>
				<Link
					to={{
						pathname: `${location.pathname}/${blogData.slug}`,
						id: blogData.id
					}}
					className="block"
				>
					<img
						src={blogData.uagb_featured_image_src.large[0]}
						alt={blogData.title.rendered}
						loading="lazy"
						className="w-full sm:h-80 object-cover object-top h-60 cursor-pointer"
					/>
				</Link>
			</div>
			<div className="flex flex-col flex-grow">
				<p className="py-4 flex items-center dark:text-teal-400 text-teal-700 ">
					{blogData.cat_data.map((cat, i) => (
						<React.Fragment key={uuidv4()}>
							<span className="uppercase font-medium first:pl-0 cursor-pointer">
								{cat.name}
							</span>
							{blogData.cat_data.length - 1 !== i && (
								<span className="mx-2 text-gray-500">|</span>
							)}
						</React.Fragment>
					))}
				</p>
				<h3 className="mb-3">
					<Link
						to={{
							pathname: `${location.pathname}/${blogData.slug}`,
							id: blogData.id
						}}
						className="text-2xl font-bold leading-6 dark:text-white dark:hover:text-teal-400 hover:text-teal-700 transition-color duration-300 cursor-pointer"
					>
						{blogData.title.rendered}
					</Link>
				</h3>
				<p className="dark:text-white text-gray-700 mb-4">
					{blogData.uagb_excerpt}
				</p>
				<div className="flex items-center mb-4 mt-auto">
					<div className="mr-2">
						<img
							src={blogData.author_data.avatar}
							alt="Author Avatar"
							className="w-10 h-10 object-cover object-center rounded-full"
						/>
					</div>
					<p className="uppercase dark:text-gray-300 text-gray-500">
						<span className="font-medium cursor-pointer mr-2 dark:text-teal-400 text-teal-700">
							{blogData.author_data.name}
						</span>
						-
						<span className="ml-2 dark:text-gray-300 text-gray-500">
							{convertDate(blogData.date)}
						</span>
					</p>
				</div>
			</div>
		</li>
	);
}

export default withRouter(BlogCard);
