import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledControlPanel = styled.div`
	width: 250px;
	flex-grow: 0;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;
export const ControlPanel = ({ showLogin, userLogin, showUserLink }) => {
	return (
		<StyledControlPanel>
			{showLogin && <Link to="/login">Вход</Link>}
			{userLogin && <span style={{ margin: '0 10px' }}>{userLogin}</span>}
			{!showLogin && <Link to="/logout">Выход</Link>}
			{showUserLink && <Link to="/users">Пользователи</Link>}
		</StyledControlPanel>
	);
};
