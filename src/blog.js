import { Route, Routes } from 'react-router-dom';
import { useStateBlog } from './store/use-state-blog';
import { Footer, Header } from './components';
import { Registration } from './pages/Registration';
import { Authorization } from './pages/Authorization';
import { Users } from './pages/Users';
import styled from 'styled-components';

const Main = styled.main`
	width: 800px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	background-color: #ffffff;
`;

export const Blog = () => {
	const { users, currentUser, setCurrentUser } = useStateBlog();
	const LogoutPage = () => {
		//setCurrentUser(null);
		return <h2>Выход</h2>;
	};
	console.log('Blog render', users.length, currentUser);
	return (
		<Main>
			<Header currentUser={currentUser} />
			<Routes>
				<Route path="/" element={<h2>Главная страница блога</h2>} />
				<Route path="/login" element={<Authorization />} />
				<Route path="/logout" element={<LogoutPage />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/users" element={<Users />} />
				<Route path="/posts/:postId" element={<h2>Страница поста</h2>} />
			</Routes>

			<Footer />
		</Main>
	);
};
