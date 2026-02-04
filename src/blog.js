import { Route, Routes } from 'react-router-dom';
import { useStateBlog } from './store/use-state-blog';
import { Footer, Header } from './components';
import { Registration } from './pages/Registration';
import { Authorization } from './pages/Authorization';
import { Users } from './pages/Users';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';

const Main = styled.main`
	width: 800px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	background-color: #ffffff;
`;

export const Blog = () => {
	const { users, currentUser } = useStateBlog();

	//console.log('Blog render', users.length, currentUser);
	return (
		<Main>
			<Header currentUser={currentUser} />
			<Routes>
				<Route path="/" element={<h2>Главная страница блога</h2>} />
				<Route path="/login" element={<Authorization />} />
				<Route path="/logout" element={<LogoutPage />} />
				<Route path="/register" element={<Registration />} />
				<Route
					path="/unauthorized"
					element={<h2>У вас нет доступа к этой странице</h2>}
				/>
				<Route
					path="/users"
					element={
						<ProtectedRoute requiredRole="0">
							<Users />
						</ProtectedRoute>
					}
				/>
				<Route path="/posts/:postId" element={<h2>Страница поста</h2>} />
			</Routes>

			<Footer />
		</Main>
	);
};
const LogoutPage = () => {
	const { logoutUser } = useStateBlog();
	const navigate = useNavigate();
	useEffect(() => {
		logoutUser();
		setTimeout(() => {
			navigate('/');
		}, 1000);
	}, []);
	return <h2>Вы вышли</h2>;
};
