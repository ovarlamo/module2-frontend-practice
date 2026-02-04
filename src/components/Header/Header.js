import { useStateBlog } from '../../store';
import { Logo } from './Logo';
import { Abstract } from './Abstract';
import { ControlPanel } from './ControlPanel';
import styled from 'styled-components';

const HeaderContainer = ({ className, currentUser }) => {
	console.log('HeaderContainer', currentUser);
	const showLoginLink = !currentUser;
	const showLogoutLink = !!currentUser;
	const userLogin = currentUser ? currentUser.login : '';
	const showUserLink = !!currentUser && currentUser.role_id === 0;
	return (
		<header className={className}>
			<Logo />
			<Abstract />

			<ControlPanel
				showLogin={showLoginLink}
				showLogout={showLogoutLink}
				userLogin={userLogin}
				showUserLink={showUserLink}
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
