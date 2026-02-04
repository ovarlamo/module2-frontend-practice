import styled from 'styled-components';
export const FooterContainer = ({ className }) => {
	console.log('FooterContainer render');
	return (
		<footer className={className}>
			<div>Блог веб-разботчика</div>
		</footer>
	);
};
export const Footer = styled(FooterContainer)`
	margin-top: auto;

	height: 120px;
	display: flex;
	flex-direction: row;
	justify-content: center;

	align-items: center;
	padding: 10px 20px;
	box-shadow: -1px -20px 15px -11px rgba(0, 0, 0, 0.15);
`;
