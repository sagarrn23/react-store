import React from 'react';

const stringToHtml = (str) => {
	const parser = new DOMParser();
	const html = parser.parseFromString(str, 'text/html');
	return html;
};

function SingleBlogContent({ content }) {
	console.log(content);
	return Object.keys(content).length ? (
		<div>
			{stringToHtml(content.content.rendered).body.firstChild.textContent}
		</div>
	) : null;
}

export default SingleBlogContent;
