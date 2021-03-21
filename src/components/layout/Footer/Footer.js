import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
		<footer className="bg-teal-900 mt-auto dark:bg-gray-900">
			<div className="container text-center px-2 py-4">
				<p>
					Made with &nbsp;
					<FontAwesomeIcon icon={faHeart} />
					&nbsp; for Front-end
				</p>
			</div>
		</footer>
	);
}

export default Footer;
