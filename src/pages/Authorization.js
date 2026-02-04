import styled from 'styled-components';
import { server } from '../dff/server';
import { useStateBlog } from '../store';
import { useNavigate } from 'react-router-dom';
const AuthorizationContainer = ({ className }) => {
	const { setCurrentUser } = useStateBlog();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		server.authorize(e.target.login.value, e.target.password.value).then((user) => {
			console.log('Authorized user:', user);
			if (user.error) {
				alert(user.error);
			} else {
				setCurrentUser(user.res);
				navigate('/');
			}
		});
		// Логика авторизации
	};
	return (
		<div className={className}>
			<h1>Авторизация </h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="login" />

				<label>
					<input type="password" name="password" />
				</label>

				<button type="submit">Войти</button>
			</form>
		</div>
	);
};
export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 20px;
	}
`;
