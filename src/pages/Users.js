import { useStateBlog } from '../store/use-state-blog';
import { useEffect } from 'react';
export const Users = () => {
	const { users, loadUsers } = useStateBlog();
	console.log('Users page render', users, users.length);
	useEffect(() => {
		loadUsers();
	}, []);
	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.login}</div>
			))}
		</div>
	);
};
