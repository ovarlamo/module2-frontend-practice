import styled from 'styled-components';
import { server } from '../dff/server';
import { useStateBlog } from '../store';
import { useNavigate } from 'react-router-dom';
const AuthorizationContainer = ({ className }) => {
	const { loginUser } = useStateBlog();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();

		server.authorize(e.target.login.value, e.target.password.value).then((user) => {
			if (user.error) {
				alert(user.error);
			} else {
				loginUser(user.res);
				navigate('/');
			}
		});
		// Логика авторизации
	};
	return (
		<div className={className}>
			<h1>Авторизация </h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="login" placeholder="Логин..." />

				<label>
					<input type="password" name="password" placeholder="Пароль..." />
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
