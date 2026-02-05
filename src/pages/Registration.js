import styled from 'styled-components';
const RegistrationContainer = ({ className }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
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
		</div>
	);
};
export const Registration = styled(RegistrationContainer)`
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
