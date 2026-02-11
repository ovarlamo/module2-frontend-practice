import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../UI/Icon';
import styled from 'styled-components';
const StyledControlPanel = styled.div`
	width: 250px;
	flex-grow: 0;

	display: flex;
	flex-direction: column;
	gap: 5px;
	justify-content: flex-end;
	align-items: end;
`;
const BtnBlockRow = styled.div`
	display: flex;
	gap: 10px;
`;

export const ControlPanel = ({ showLogin, userLogin, showUserLink }) => {
	const navigate = useNavigate();
	const handleBackBtn = () => navigate(-1);
	return (
		<StyledControlPanel>
			<BtnBlockRow>
				{showLogin && (
					<Link to="/login">
						<button>Вход</button>
					</Link>
				)}
				{userLogin && <span style={{ margin: '0 10px' }}>{userLogin}</span>}
				{!showLogin && (
					<Icon className="fa-sign-out">
						<Link to="/logout" />
					</Icon>
				)}
			</BtnBlockRow>

			<BtnBlockRow>
				<Icon className="fa fa-backward" onClick={handleBackBtn}></Icon>

				<Link to="/posts">
					<Icon className="fa fa-file-text-o" />
				</Link>

				{showUserLink && (
					<Link to="/users">
						<Icon className="fa  fa-users" />
					</Link>
				)}
			</BtnBlockRow>
		</StyledControlPanel>
	);
};
