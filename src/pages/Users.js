import styled from 'styled-components';
import { useStateBlog } from '../store/use-state-blog';
import { useEffect } from 'react';
import { RoleSelect } from '../components/RoleSelect/RoleSelect';
import { Icon } from '../components/UI/Icon/Icon';
import { saveUser } from '../store/thunks';

const Table = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0 10px;

	td {
		padding: 12px 16px;
		text-align: left;
		border-bottom: 1px solid black;
		border-top: 1px solid black;
	}
		td:first-child {
		border-left: 1px solid black;
		}
		td:nth-child(3) {
		border-right: 1px solid black;
		}
		td:last-child {
		border:none;
}
	}
	td,
	th {
		text-align: left;
		padding: 8px;
		font-weight: normal;
	}
`;

const UsersContainer = ({ className }) => {
	const { users, loadUsers, roles, loadRoles, setUserRole, deleteUser, saveUser } =
		useStateBlog();

	const handleRoleChange = (userId, newRoleId) => {
		// Логика изменения роли пользователя
		console.log('Изменение роли на:', newRoleId);
		setUserRole(userId, newRoleId);
	};

	useEffect(() => {
		loadUsers();
		loadRoles();
	}, []);
	return (
		<div className={className}>
			<h2>Пользователи</h2>
			<Table>
				<thead>
					<tr>
						<th>Логин</th>
						<th>Дата регистрации</th>
						<th>Роль</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.login}</td>
							<td>{new Date(user.registed_at).toLocaleDateString()}</td>
							<td>
								<RoleSelect
									selectedRole={user.role_id}
									onChange={(newRoleId) =>
										handleRoleChange(user.id, newRoleId)
									}
									roles={roles}
								/>
								<Icon
									className="fa fa-save"
									onClick={() => saveUser(user)}
								></Icon>
							</td>
							<td>
								<Icon
									className="fa fa-trash"
									onClick={() => deleteUser(user.id)}
								></Icon>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};
export const Users = styled(UsersContainer)`
	margin: 50px auto;
`;
