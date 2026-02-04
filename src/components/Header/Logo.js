import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.div`
	font-size: 20px;
	font-weight: bold;

	margin-right: auto;
	flex-grow: 0;
	width: 250px;
	display: flex;
	flex-direction: row;
	align-items: center;
	& i {
		font-size: 48px;
		margin-right: 8px;
	}
`;
export const Logo = () => {
	return (
		<StyledLogo>
			<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
				<i className="fa fa-code"></i>
			</Link>

			<div>
				<div>Блог</div>
				<div> веб-разботчика</div>
			</div>
		</StyledLogo>
	);
};
