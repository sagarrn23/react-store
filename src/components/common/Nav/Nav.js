import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Nav({ navData: { menus, classList }, closeMenu }) {
	const ulClasses = classList?.ul.length
		? classList.ul
		: ['flex', 'flex-row', 'items-center', 'justify-start'];
	const liClasses = classList?.li.length ? classList.li : ['uppercase'];
	const linkClasses = classList?.link.length ? classList.link : ['p-5 block'];

	const menuDisplayHandler = () => {
		const screenWidth = window.innerWidth;
		if (screenWidth <= 768) closeMenu(false);
	};

	const renderMenus = (menus) => {
		return menus.map((menu) => (
			<li key={uuidv4()} className={liClasses.join(' ')}>
				<NavLink
					className={linkClasses.join(' ')}
					to={menu.path}
					onClick={menuDisplayHandler}
				>
					{menu.title}
				</NavLink>
			</li>
		));
	};
	return (
		<ul className={ulClasses.join(' ')}>
			{Object.keys(menus).length ? renderMenus(menus) : null}
		</ul>
	);
}

Nav.prototype = {
	menus: PropTypes.array,
	classList: PropTypes.object,
	closeMenu: PropTypes.func
};

export default Nav;
