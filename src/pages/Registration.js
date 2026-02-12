import { useState } from 'react';
import { server } from '../dff/server';
import { useStateBlog } from '../store';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ErrMsgBox } from '../components/ErrMsgBlock';

const RegistrationContainer = ({ className }) => {
	const { loginUser } = useStateBlog();
	const [errMsg, setErrMsg] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;
		if (password !== confirmPassword) {
			setErrMsg('Пароли не совпадают');
			return;
		}

		server
			.registration(e.target.login.value, e.target.password.value)
			.then((resp) => {
				if (resp.error) {
					setErrMsg(resp.error);
				} else {
					loginUser(resp.res);
					navigate('/');
				}
			});
	};
	return (
		<div className={className}>
			<h1>Регистрация</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="login" placeholder="Логин..." />
				<input type="password" name="password" placeholder="Пароль..." />
				<input
					type="password"
					name="confirmPassword"
					placeholder="Повтор пароля..."
				/>
				<button type="submit">Зарегистрироваться</button>
			</form>
			{errMsg && <ErrMsgBox>{errMsg}</ErrMsgBox>}
		</div>
	);
};
export const Registration = styled(RegistrationContainer)`
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
	}
	& button {
		font-size: 1.2rem;
		padding: 0.5rem;
		width: 100%;
	}
`;
