import { Logo } from './Logo';
import { Abstract } from './Abstract';
import { ControlPanel } from './ControlPanel';
import styled from 'styled-components';
import { ROLES } from '../../constants';

const HeaderContainer = ({ className, currentUser }) => {
	const showLoginLink = !currentUser?.login ? true : false;
	const userLogin = currentUser?.login || '';
	const showUserLink = currentUser?.role_id === ROLES.ADMIN;
	const showPostLink =
		currentUser?.role_id === ROLES.ADMIN || currentUser?.role_id === ROLES.MODERATOR;
	return (
		<header className={className}>
			<Logo />
			<Abstract />

			<ControlPanel
				showLogin={showLoginLink}
				userLogin={userLogin}
				showUserLink={showUserLink}
				showPostLink={showPostLink}
			/>
		</header>
	);
};
export const Header = styled(HeaderContainer)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px 20px;
	box-shadow: 2px 23px 15px -11px rgba(0, 0, 0, 0.15);
`;
