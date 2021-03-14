import React, { useEffect, useState } from 'react';
import Nav from '../../common/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ToggleTheme from '../../common/ToggleTheme/ToggleTheme';

function Header() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [menuWrapClasses, setMenuWrapClasses] = useState([
		'flex',
		'flex-row',
		'items-center',
		'justify-start'
	]);

	const [displayHamburger, setDisplayHamburger] = useState(true);

	const headerMenus = {
		menus: [
			{
				title: 'home',
				path: '/'
			},
			{
				title: 'blog',
				path: '/blog'
			},
			{
				title: 'shop',
				path: '/shop'
			}
		],
		classList: {
			ul: menuWrapClasses,
			li: ['uppercase'],
			link: ['p-5 block']
		}
	};

	const mobileMenus = () => {
		const mobileClasses = [
			'absolute',
			'inset-x-0',
			'bottom-0',
			'w-full',
			'transform',
			'translate-y-full',
			'bg-teal-400',
			'dark:bg-gray-900'
		];

		setMenuWrapClasses((prevClasses) => [...prevClasses, ...mobileClasses]);
	};

	const toggleManuHandler = () => {
		setToggleMenu(!toggleMenu);
		mobileMenus();
	};

	useEffect(() => {
		if (window.innerWidth >= 768) {
			setDisplayHamburger(false);
			setToggleMenu(true);
		}
	}, []);

	return (
		<header className="relative bg-teal-600 dark:bg-gray-900">
			<div className="container p-4 flex flex-row items-center justify-between">
				<div className="mr-auto">
					<Link to="/" className="inline-flex">
						<h1 className="text-4xl font-black">React Store</h1>
					</Link>
				</div>
				{toggleMenu && (
					<Nav navData={headerMenus} closeMenu={setToggleMenu} />
				)}
				<div className="flex items-center justify-center">
					<ToggleTheme />
					{displayHamburger && (
						<FontAwesomeIcon
							icon={faBars}
							onClick={() => toggleManuHandler()}
							className="text-4xl cursor-pointer"
						/>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
