import styled from 'styled-components';
const StyledAbstract = styled.div`
	text-align: center;
	flex-grow: 1;
	font-style: italic;
	font-size: 18px;
`;
export const Abstract = () => {
	return (
		<StyledAbstract>
			Веб-технологии
			<br />
			Написание кода
			<br />
			Разбор ошибок
		</StyledAbstract>
	);
};
