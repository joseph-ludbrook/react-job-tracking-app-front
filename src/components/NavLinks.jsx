import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

export const NavLinks = () => {
	const { toggleSidebar } = useDashboardContext();
	return (
		<div className="nav-links">
			{links.map((link) => {
				const { text, path, icon } = link;
				return (
					<NavLink
						to={path}
						key={text}
						className="nav-link"
						onClick={toggleSidebar}
						end>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};