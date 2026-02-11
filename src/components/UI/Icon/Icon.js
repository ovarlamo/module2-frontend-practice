import styled from 'styled-components';
const IconContainer = ({ children, className, onClick }) => {
	return (
		<i className={`fa fa-fw fa-lg ${className || ''}`} onClick={onClick}>
			{children}
		</i>
	);
};
export const Icon = styled(IconContainer)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	/* Стили для активного состояния */
	&:hover {
		color: #007bff;
	}

	/* Перекрываем стили, если disabled={true} */
	${({ disabled }) =>
		disabled &&
		`
		cursor: not-allowed;
		opacity: 0.5;
		pointer-events: none; /* Полностью отключает hover и клики */
	`}
`;
