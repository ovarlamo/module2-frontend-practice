import styled from 'styled-components';
import { server } from '../dff/server';
import { useStateBlog } from '../store';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ErrMsgBox } from '../components/ErrMsgBlock';
const AuthorizationContainer = ({ className }) => {
	const { loginUser } = useStateBlog();
	const navigate = useNavigate();
	const [errMsg, setErrMsg] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();

		server.authorise(e.target.login.value, e.target.password.value).then((resp) => {
			if (resp.error) {
				setErrMsg(resp.error);
			} else {
				loginUser(resp.res);
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
				<Link to="/register">
					<button>Зарегистрироваться</button>
				</Link>
			</form>
			{errMsg && <ErrMsgBox>{errMsg}</ErrMsgBox>}
		</div>
	);
};
export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 3rem auto;
	gap: 0.5rem;
	width: 300px;

	& form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 20px;
		width: 100%;
	}
	& input {
		font-size: 1.2rem;
		padding: 0.5rem;
		width: 100%;
	}
	& button {
		font-size: 1.2rem;
		padding: 0.5rem;
		width: 100%;
	}
`;
