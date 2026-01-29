import styled from 'styled-components';
const Div = styled.div`
	text-align: center;
	margin: 0 auto;
`;

export const App = () => {
	console.log('App render');

	return (
		<Div>
			<i className="fa fa-camera-retro"></i>
			<div className="fa">Hello</div>
		</Div>
	);
};
