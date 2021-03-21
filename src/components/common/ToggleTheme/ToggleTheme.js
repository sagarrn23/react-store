import React, { useEffect, useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 *  if white theme then show dark theme icon
 */

function ToggleTheme() {
	const [theme, setTheme] = useState('white');

	const dayIconData = {
		icon: faMoon,
		iconBg: 'bg-black'
	};

	const nightIconData = {
		icon: faSun,
		iconBg: 'bg-white'
	};

	const [iconStyle, setIconStyle] = useState(dayIconData);

	const htmlThemeClassHandler = (pastTheme = theme) => {
		pastTheme === 'white'
			? document.documentElement.classList.remove('dark')
			: document.documentElement.classList.add('dark');
	};

	const changeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'white' ? 'dark' : 'white'));
		setIconStyle(theme === 'white' ? dayIconData : nightIconData);

		localStorage.setItem('themeName', theme);

		htmlThemeClassHandler();
	};

	useEffect(() => {
		let pastTheme = theme;
		const ifThemeSet = localStorage.getItem('themeName');

		if (ifThemeSet) {
			pastTheme = ifThemeSet;
		} else {
			localStorage.setItem('themeName', theme);
		}

		setTheme(pastTheme === 'white' ? 'dark' : 'white');
		setIconStyle(pastTheme === 'white' ? dayIconData : nightIconData);
		htmlThemeClassHandler(pastTheme);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="px-4">
			<div
				className={`rounded-full p-2 bg-black w-8 h-8 flex items-center justify-center cursor-pointer ${iconStyle.iconBg}`}
				onClick={() => changeTheme()}
			>
				<FontAwesomeIcon
					className="text-yellow-400"
					icon={iconStyle.icon}
				/>
			</div>
		</div>
	);
}

export default ToggleTheme;
