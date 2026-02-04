import styled from 'styled-components';
const IconContainer = ({ children, className, onClick }) => {
	return (
		<span className={`icon-container ${className || ''}`} onClick={onClick}>
			{children}
		</span>
	);
};
export const Icon = styled(IconContainer)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 24px;
	height: 24px;
	font-size: 18px;
	svg {
		width: 100%;
		height: 100%;

		fill: currentColor;
		stroke: currentColor;
	}
`;
